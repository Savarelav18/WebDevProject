import { useState } from 'react';
import { IconoLunaColor, IconoLunaSinColor } from '../components/icons';

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
                    <IconoLunaColor/>
                ) : (
                    <IconoLunaSinColor/>
                )}
            </div>
        </div>
    );
}

export default PasswordInput;
