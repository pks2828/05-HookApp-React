import React, { useState } from 'react';
import { UserContext } from './UserContext';
import { User } from '../interfaces/user';

// const user: User = {
//     id: 1,
//     name: 'John Doe',
//     email: 'johndoe@example.com'
// };

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;