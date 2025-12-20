import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";

export default function Welcome() {
    const [nameInput, setNameInput] = useState("");
    const { saveUsername } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameInput.trim()) {
            saveUsername(nameInput.trim());
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] px-4">
            <div className="w-full max-w-md p-8 glass rounded-3xl border border-white/10 shadow-2xl animate-fade-in">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 mx-auto mb-6 rotate-3">
                        <span className="text-white font-black text-4xl -rotate-3">N</span>
                    </div>
                    <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3">
                        Welcome Abroad
                    </h2>
                    <p className="text-gray-400 font-medium">
                        What should we call your workspace?
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group relative">
                        <input
                            type="text"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            placeholder="Enter your name or workspace title"
                            className="w-full bg-white/5 border border-white/10 text-white rounded-2xl px-6 py-5 outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-600 text-lg font-medium"
                            autoFocus
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95 text-lg tracking-wide"
                    >
                        Get Started
                    </button>
                </form>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                        Private & Local to this device
                    </p>
                </div>
            </div>
        </div>
    );
}
