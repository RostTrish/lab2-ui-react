import { useEffect, useState } from "react";
import { getUsers } from "../services/usersService";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Завантаження даних...</p>;
    }

    return (
        <div>
            <h2>Користувачі</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Імʼя</th>
                        <th>Телефон</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
