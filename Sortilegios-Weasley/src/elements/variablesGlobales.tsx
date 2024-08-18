import { useState } from "react";

export const usuario = {
    nombre: "admin",
    email: 'admin@gmail.com',
    contraseña: "admin1234",
}

export function useUserForm() {
  const [saveUser, setSaveUser] = useState("");
  const [saveEmail, setSaveEmail] = useState("");
  const [savePswrd, setSavePswrd] = useState("");

  return {
    saveUser,
    setSaveUser,
    saveEmail,
    setSaveEmail,
    savePswrd,
    setSavePswrd
  };
}




