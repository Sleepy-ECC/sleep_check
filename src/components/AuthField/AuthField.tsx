import type { InputHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import EyeIcon from "../EyeIcon/EyeIcon";
import "./AuthField.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    after?: ReactNode;
    className?: string;
    showPasswordToggle?: boolean;
};

function AuthField({ label, after, className = "", showPasswordToggle = false, type = "text", ...inputProps }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPasswordToggle && showPassword ? "text" : type;

    return (
        <label className={`auth_field ${className}`.trim()}>
            <span>{label}</span>
            {showPasswordToggle ? (
                <div className="auth_password_input">
                    <input type={inputType} {...inputProps} />
                    <button
                        type="button"
                        aria-label={showPassword ? `${label}を非表示` : `${label}を表示`}
                        onClick={() => setShowPassword((value) => !value)}
                    >
                        <EyeIcon />
                    </button>
                </div>
            ) : (
                <input type={type} {...inputProps} />
            )}
            {after}
        </label>
    );
}

export default AuthField;
