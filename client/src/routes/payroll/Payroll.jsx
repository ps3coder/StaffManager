import React, { useState, useEffect } from "react";
import apiRequest from "../../lib/apiRequest";
import PayrollPage from "../../components/Payroll/PayrollPage";
import PayrollList from "../../components/Payroll/PayrollList";

const Payroll = () => {
    const [payrollList, setPayrollList] = useState([]);
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [formState, setFormState] = useState({});

    const fetchPayrolls = async () => {
        try {
            const response = await apiRequest.get("/payroll");
            setPayrollList(response.data);
        } catch (error) {
            setError("Failed to fetch payroll records");
        }
    };

    useEffect(() => {
        fetchPayrolls();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const updatedValue =
            name === "base_salary" || name === "bonuses" || name === "deductions" || name === "net_salary"
                ? parseInt(value, 10) || 0
                : name === "payment_date" || name === "created_at" || name === "updated_at"
                    ? value
                        ? new Date(value).toISOString()
                        : null
                    : value;

        setFormState({ ...formState, [name]: updatedValue });
    };


    const handleAddOrUpdate = async (e) => {
        e.preventDefault();
        console.log(formState)
        try {
            if (isEditing) {
                const { id, ...updatedData } = formState;
                await apiRequest.put(`/payroll/${formState.id}`, updatedData);
                setIsEditing(false);
            } else {
                await apiRequest.post("/payroll/add", formState);
            }
            fetchPayrolls();
        } catch (error) {
            setError("Failed to save payroll record");
        }
    };


    const handleEdit = (payroll) => {
        setFormState(payroll);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await apiRequest.delete(`/payroll/${id}`);
            fetchPayrolls();
        } catch (error) {
            setError("Failed to delete payroll record");
        }
    };

    return (
        <div>
            <div>
                <PayrollPage

                    formState={formState}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    setFormState={setFormState}
                    handleAddOrUpdate={handleAddOrUpdate}
                />
            </div>
            <PayrollList
                payrollList={payrollList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Payroll;
