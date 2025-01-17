import React from "react";

const PayrollPage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="payroll-form">
                <div>
                    <label htmlFor="">Pay Month:</label>
                    <input
                        type="text"
                        name="pay_month"
                        value={formState.pay_month || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Base Salary:</label>
                    <input
                        type="number"
                        name="base_salary"
                        value={formState.base_salary || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Staff Id :</label>
                    <input
                        type="text"
                        name="staff_id"
                        value={formState.staff_id || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">Bonuses:</label>
                    <input
                        type="number"
                        name="bonuses"
                        value={formState.bonuses || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Deductions:</label>
                    <input
                        type="number"
                        name="deductions"
                        value={formState.deductions || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Net Salary:</label>
                    <input
                        type="number"
                        name="net_salary"
                        value={formState.net_salary || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        name="status"
                        value={formState.status || ""}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="APPROVED">Approved</option>
                        <option value="REJECTED">Rejected</option>
                    </select>
                </div>
                <div>
                    <label>Payment Date:</label>
                    <input
                        type="date"
                        name="payment_date"
                        value={
                            formState.payment_date
                                ? new Date(formState.payment_date).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Remarks:</label>
                    <input
                        type="text"
                        name="remarks"
                        value={formState.remarks || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Created At:</label>
                    <input
                        type="date"
                        name="created_at"
                        value={
                            formState.created_at
                                ? new Date(formState.created_at).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Updated At:</label>
                    <input
                        type="date"
                        name="updated_at"
                        value={
                            formState.updated_at
                                ? new Date(formState.updated_at).toISOString().slice(0, 10)
                                : ""
                        }
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? "Update Payroll" : "Add Payroll"}</button>
            </form>
        </div>
    );
};

export default PayrollPage;
