import React from "react";

export default function InlineEdit({ value, setValue }) {
    const [editingValue, setEditingValue] = React.useState(value);
    const onChange = (event) => setEditingValue(event.target.value)

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
        }
    }
    const onBlur = (event) => {
        setValue(event.target.value)
    }

    return (
        <input className="edit-title"
            type="text"
            aria-label="Title"
            value={editingValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            placeholder="Add title"
        />
    )
}