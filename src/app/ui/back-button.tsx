"use client"
import  Button  from "react-bootstrap/Button";

export default function BackButton({label="Go Back"}: {label: string|undefined}) {
    return (
        <Button variant="primary" onClick={() => history.back()}>
            {label}
        </Button>
    )
}