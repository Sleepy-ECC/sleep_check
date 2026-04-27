import { useNavigate } from "@tanstack/react-router";
import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { loginUser } from "../api/auth";
import { validateLoginForm } from "../features/login/validateLoginForm";

type FormSubmitHandler = NonNullable<ComponentPropsWithoutRef<"form">["onSubmit"]>;

function getFormValue(formData: FormData, name: string) {
    return String(formData.get(name) || "");
}

export function useLoginForm() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit: FormSubmitHandler = async (event) => {
        event.preventDefault();

        // state反映前後の連打やEnter連打で、同じログインリクエストを重ねない
        if (isSubmitting) {
            return;
        }

        setError("");

        const formData = new FormData(event.currentTarget);
        const email = getFormValue(formData, "email").trim();
        const password = getFormValue(formData, "password");
        const validationError = validateLoginForm({ email, password });

        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);

        try {
            const { data, ok } = await loginUser({
                email,
                password,
            });

            if (!ok || !data.accessToken) {
                setError(data.message || data.error || "ログインに失敗しました。");
                return;
            }

            // 画面をまたいでログイン状態を参照できるよう、認証情報を保存する
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
