import {Button, Checkbox, Drawer, Group, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";
import {DataType} from "../../api/mainApi.ts";
import {appThunk} from "../../app/app.slice.ts";
import {FC} from "react";

type PropsType = {
    opened: boolean
    close: () => void
}

/**
 * RequestForm - модальное окно - (ЗАПРОСИТЬ ПРАЙС)
 * @param opened - boolean свойство указывающее на состояние Drawer
 * @param close - функция закрытия Drawer
 */
export const RequestForm: FC<PropsType> = ({opened, close}) => {
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            termsOfService: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    })
    const disabledButton = !form.values.termsOfService

    const dispatch = useAppDispatch()

    const onSendData = async (value: DataType) => {
        await dispatch(appThunk.sendEmail(value))
        close()
    }

    return (
        <Drawer
            opened={opened}
            onClose={close}
            title="Запросить прайс"
            transitionProps={{transition: 'rotate-left', duration: 150, timingFunction: 'linear'}}>
            <form onSubmit={ form.onSubmit((value) => onSendData(value)) }>
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    autoFocus
                    {...form.getInputProps('email')}
                />
                <TextInput
                    label="Name"
                    placeholder="Имя"
                    {...form.getInputProps('name')}
                />

                <Checkbox
                    mt="md"
                    label='С политикой конфиденциальности согласен'
                    {...form.getInputProps('termsOfService', {type: 'checkbox'})}
                />

                <div style={{margin: '20px 0'}}>
                    <a href={'/landing/src/common/security_policy.docx'} target={'_blank'}>Политика конфиденциальности</a>
                </div>

                <Group position="right" mt="md">
                    <Button type="submit"
                            disabled={disabledButton}
                    >Отправить</Button>
                </Group>
            </form>
        </Drawer>
    );
};