import { create } from "zustand";

interface SignupForm {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  id: string;
}

interface SignupStore {
  form: SignupForm;
  setField: (field: keyof SignupForm, value: string) => void;
  reset: () => void;
}

const EMPTY_FORM: SignupForm = {
  email: "",
  password: "",
  passwordConfirm: "",
  nickname: "",
  id: "",
};

export const useSignupStore = create<SignupStore>((set) => ({
  form: EMPTY_FORM,
  setField: (field, value) =>
    set((state) => ({ form: { ...state.form, [field]: value } })),
  reset: () => set({ form: EMPTY_FORM }),
}));
