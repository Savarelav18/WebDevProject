import snitchLlena from '../assets/snitch.png'

interface SnitchProps{
    calificacion:number;
}


export const Snitch:React.FC<SnitchProps>=({calificacion}) => {
    const snitchVacia ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcElEQVR4nMXW60tTYRwH8OMt7xqazunc2eZ0Om+YZt7mcRdPm66SRKQixBeJ0JuM3hSC9Af0B/giwjSDvSvEJUsGkWawYNN5m81VFBJIVLrpzg784jm5tenUnS3pge+r8fA5v9/ze3YOhv2vBTosBgCLimR/eOgbSWrY6Kg4jf0mDItyvSzINw1Xx4WDOnWFeeHsw7YnpDnOSTEPWMLoWFxjAhyecJJZo2CUpuxMFQldEyU4mKqTQt6nk55yPSvIB11hHgxh0axR56SYh2CUrSlRNhiJ2OP2/dDxMlwjIj5T7dOiM+zQSXGaa7oE96JM9BIBGPHTR03212FuEgK92WQ7VGCU5gSge0FDBlMVQc/s80Ne4vYon+sPOx7jCSxQInb7EBgF/bZ/0FClzvH8XH/UOSrmhXx3wYgnwKsyDuiLuTtGiSAojlpuEKX77/s5kpvpj/6ZZlF2yNVuTFUkHzjbYFXri7neQQOdNGVrXMjZD2+yOV/Uwq1XQs5xMHO9UHeGq+O8ExyQEREfXanQUMCiwFCcyZyv/pA2+7f7BTcJ5QA6JsDRkIVe7RAWDa/FWcdV64N1vMRgLXaNCXA0bBib5TDiCeiP4qiKd6fLJZS1scmzcKGFNhFdnveyTs/MOeWuvlyC0F+PxFmsXwZoWl0GKT8Y6J6pKKPNsm56nuiFFU0HrJAd9IL8Bm1p6UHxvK3RoCvECvXhRiL2u0GUvvVcyPE+gHu6stQzW6OiLbIeyizrh1XVVXBoNbCkuuKF3Yv1Dzwz9Yqw0L+4NAVdF9RuaraG8MzVkvR8cx9lbrxLWRtvMSiKva0dlpWd9GLj4K617h6YwnttBuIbrclgaS53m+rOgo28RlkbBqgF2W0f6tBq4GNbO7UsG6RXm++DTSGNHLXWZcBCcwmKx0Zq3UvETbdN3uuPulcUXbS95Q7KjlWmiBxdUmZ6UVgjG+g1shvW2y77o9SqvM+H2ptUkaPLDak+1EyUwbqWDGjtJ7LbC6LAN7IychSGosHSIPHBNnUVOC6qmbbaW65TNvkAwqgPRD/YNZ1gU8dHjDLwO78WM7CyiqnYptHCevslNEh7lRf/E9AHW4mcAHhRXgrrrefB0SZnHuCLugqA5bdTSPBcbRqYZcIAfL5JBHZVwHv3RBboumJgUh0P0MX+i/+k12+a/LoKOnVsFAAAAABJRU5ErkJggg=="
    const renderStars = (): JSX.Element[] => {
        const stars: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= calificacion) {
            stars.push(<img key={i} src={snitchLlena} alt={`Estrella llena ${i}`} style={{maxWidth:"29px"}} />);
          } else {
            stars.push(<img key={i} src={snitchVacia} alt={`Estrella vacía ${i}`} style={{maxWidth:"29px"}} />);
          }
        }
        return stars;
      };
    //const snitchVacia = "data:image/png;base64,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"
    return <>{renderStars()}</>
}