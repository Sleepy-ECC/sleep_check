import type { ComponentPropsWithoutRef, ReactNode } from "react";
import "./AuthForm.css";

type FormSubmitHandler = ComponentPropsWithoutRef<"form">["onSubmit"];

type AuthFormProps = {
    title: string;
    ariaLabel: string;
    submitText: string;
    children: ReactNode;
    secondaryAction?: ReactNode;
    footer?: ReactNode;
    error?: string;
    isSubmitting?: boolean;
    onSubmit?: FormSubmitHandler;
    submitClassName?: string;
};

export function AuthForm({
    title,
    ariaLabel,
    submitText,
    children,
    secondaryAction,
    footer,
    error,
    isSubmitting = false,
    onSubmit,
    submitClassName = "",
}: AuthFormProps) {
    return (
        <main className="auth_page">
            <form className="auth_form" aria-label={ariaLabel} onSubmit={onSubmit}>
                <h1>{title}</h1>
                {children}
                {error && <p className="auth_error">{error}</p>}
                <button className={`auth_submit_btn ${submitClassName}`.trim()} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : submitText}
                </button>
                {secondaryAction}
                {footer}
            </form>
        </main>
    );
}
