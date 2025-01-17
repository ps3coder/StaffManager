import React from "react";

const PerformancePage = ({ handleAddOrUpdate, formState, handleInputChange, isEditing }) => {
    return (
        <div>
            <form onSubmit={handleAddOrUpdate} className="performance-form">
                <div>
                    <label htmlFor="staff_id">Staff Id:</label>
                    <input
                        type="text"
                        name="staff_id"
                        value={formState.staff_id || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="review_period">Review Period:</label>
                    <input
                        type="text"
                        name="review_period"
                        value={formState.review_period || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="ratings">Ratings :</label>
                    <textarea
                        type="number"
                        name="ratings"
                        value={formState.ratings || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="recommendations">Recommendations:</label>
                    <textarea
                        name="recommendations"
                        value={formState.recommendations || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="created_at">Created At:</label>
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
                    <label htmlFor="updated_at">Updated At:</label>
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
                <button type="submit">{isEditing ? "Update Performance" : "Add Performance"}</button>
            </form>
        </div>
    );
};

export default PerformancePage;
