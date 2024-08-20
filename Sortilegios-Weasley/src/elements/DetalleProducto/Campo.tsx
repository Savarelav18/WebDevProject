interface CampoProps {
    tittle: string;
    children?: string;
}
export function Campo({ tittle, children }: CampoProps) {
    return (
        <div>
            <h3 className="different-lines">{tittle}</h3>
            <p>{children}</p>
        </div>
    )
}