import { useState } from 'react';

function PasswordInput({ password, setPassword }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: '40px'}}
            />
            <div
                className="pwd-icon"
                style={{
                    position: 'absolute',
                    right: '1px',
                    cursor: 'pointer',
                    marginBottom: '0px'
                }}
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <img
                    src="https://img.icons8.com/?size=100&id=QSC3iqKO2qjl&format=png&color=000000"
                        style={{ width: '100px', height: '110px', clipPath: 'inset(29% 10% 38% 10%)'}}/>
                ) : (
                    <img
                        src="https://img.icons8.com/?size=100&id=bitbKU8IIiQp&format=png&color=000000"
                        style={{ width: '100px', height: '110px', clipPath: 'inset(29% 10% 38% 10%)' }}/>
                )}
            </div>
        </div>
    );
}

export default PasswordInput;
