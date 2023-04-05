import React from "react";

export default function DescriptionEditor({ value, setValue }) {
    const [editingValue, setEditingValue] = React.useState(value)

    const onChange = (event) => setEditingValue(event.target.value);
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
        }
    }

    const onBlur = (event) => {
        setValue(event.target.value)
    }


    return (
        <textarea className="edit-description"
            rows={1}
            aria-label="Description"
            value={editingValue}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder=" Add description"

        />
    )
}