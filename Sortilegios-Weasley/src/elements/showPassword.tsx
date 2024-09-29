import { useState } from 'react';
import { FormControl} from 'react-bootstrap';
import { IconoLunaColor, IconoLunaSinColor } from '../components/icons';

interface PasswordInputProps {
    password: string;
    setPassword: (value: string) => void;
}

function PasswordInput({ password, setPassword }: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
            <FormControl
                type={showPassword ? 'text' : 'password'}
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: '40px' }} 
            />
            <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                    position: 'absolute',
                    right: '10px', 
                    cursor: 'pointer',
                    zIndex: 1,
                    top: '50%',
                    transform: 'translateY(-50%)', 
                }}
            >
                {showPassword ? <IconoLunaColor /> : <IconoLunaSinColor />}
            </div>
        </div>
    );
}

export default PasswordInput;
