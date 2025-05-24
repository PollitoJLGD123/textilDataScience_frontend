'use client';

import url from "../../../../api/url";
import axios from 'axios'
import { useState, useEffect } from "react";

export default function page() {

    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getClientes() {
        setLoading(true);
        try {
            const response = await axios.get(url + "/asistencias");
            setClientes(response.data);
        } catch (error) {
            console.error("Error al cargar clientes:", error);
            setClientes([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <>
            <h1>Asistencias</h1>
            <button onClick={getClientes}>Actualizar</button>
            {!loading && clientes && clientes.length > 0 ? (
                clientes.map((cliente) => (
                    <div key={cliente.id}>
                        <h2>{cliente.fecha}</h2>
                    </div>
                ))
            ) : (
                !loading && <p>No hay asistencias.</p>
            )}
        </>
    )
}
