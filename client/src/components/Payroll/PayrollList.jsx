import React from "react";

const PayrollList = ({ payrollList, handleEdit, handleDelete }) => {
    return (
        <div>
            <h1>Payroll List</h1>
            <ul>
                {payrollList.map((payroll) => (
                    <li key={payroll.id}>
                        <p><strong>Staff Id:</strong> {payroll.staff_id}</p>
                        <p><strong>Pay Month:</strong> {payroll.pay_month}</p>
                        <p><strong>Base Salary:</strong> {payroll.base_salary}</p>
                        <p><strong>Bonuses:</strong> {payroll.bonuses}</p>
                        <p><strong>Deductions:</strong> {payroll.deductions}</p>
                        <p><strong>Net Salary:</strong> {payroll.net_salary}</p>
                        <p><strong>Status:</strong> {payroll.status}</p>
                        <p><strong>Payment Date:</strong> {payroll.payment_date}</p>
                        <p><strong>Remarks:</strong> {payroll.remarks}</p>
                        <p><strong>Created At:</strong> {payroll.created_at}</p>
                        <p><strong>Updated At:</strong> {payroll.updated_at}</p>
                        <button onClick={() => handleEdit(payroll)}>Edit</button>
                        <button onClick={() => handleDelete(payroll.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PayrollList;
