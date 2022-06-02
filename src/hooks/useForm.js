import { useState } from "react";

function useForm(initialState = {}) {
    const [formValue, setFormValue] = useState(initialState);

    const handleValueChange = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        });
    };

    const resetValues = () => {
        setFormValue(initialState);
    };

    return [formValue, handleValueChange, resetValues];
}

export default useForm;