import React from "react";
import { Form } from "../../components/Form/index.ts"; 
import { Button } from "../../components/Button/index.ts"

import * as S from '../../styles/App.tsx'

export const Login = () => {
    return (
        <>
            <Form.Root title="Fazer Login">
                <Form.Content>
                    <Form.Input placeholder="Empresa">
                        <S.Icon src="./assets/icon.png"/>
                    </Form.Input>
                    <Form.Input placeholder="Usuario">
                        <S.Icon src="./assets/icon.png"/>
                    </Form.Input>
                    <Form.Input placeholder="Senha">
                        <S.Icon src="./assets/icon.png"/>
                    </Form.Input>
                    <Button.Root textCenter={true} text="Qualquer" />
                </Form.Content>
            </Form.Root>
        </>
    )
}