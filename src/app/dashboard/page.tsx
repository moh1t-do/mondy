'use client'
import { User } from '@firebase/auth'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from '@/firebase/firebase';
import WishList from '@/components/WishList';
import PostForm from '@/components/PostForm';

function Dashboard(): React.ReactNode {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (authUser == null ? <h1>Loading</h1> : <div className="flex flex-col-reverse lg:flex-row items-center gap-8 justify-between">
        <WishList />
        <PostForm />
    </div>);
}

export default Dashboard;