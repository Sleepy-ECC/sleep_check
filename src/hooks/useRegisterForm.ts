import { useNavigate } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { registerUser } from "../api/auth";
import { validateRegisterForm } from "../features/register/validateRegisterForm";

type FormSubmitHandler = NonNullable<ComponentPropsWithoutRef<"form">["onSubmit"]>;

function getFormValue(formData: FormData, name: string) {
    return String(formData.get(name) || "");
}

export function useRegisterForm() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit: FormSubmitHandler = async (event) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setError("");

        const formData = new FormData(event.currentTarget);
        const displayName = getFormValue(formData, "displayName").trim();
        const email = getFormValue(formData, "email").trim();
        const password = getFormValue(formData, "password");
        const confirmPassword = getFormValue(formData, "confirmPassword");
        const validationError = validateRegisterForm({ displayName, email, password, confirmPassword });

        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);

        try {
            const { data, ok } = await registerUser({
                email,
                password,
                displayName,
            });

            if (!ok || !data.accessToken) {
                setError(data.message || data.error || "新規登録に失敗しました。");
                return;
            }

            localStorage.setItem("accessToken", data.accessToken);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
            }

            await navigate({ to: "/" });
        } catch {
            setError("通信に失敗しました。時間をおいてもう一度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        error,
        handleSubmit,
        isSubmitting,
    };
}
