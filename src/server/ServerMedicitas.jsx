const BASE_URL="http://localhost:8080/pacientes/";

export async function listPacientes(){
    const res = await fetch(BASE_URL);
    return await res.json();
}

export async function findPacienteById(id) {
    const res = await fetch(BASE_URL+id);
    return await res.json();
}

export async function deletePacienteById(id) {
    const options={method:"DELETE"}
    const res = await fetch(BASE_URL+id,options);
    return await res.text();
}

