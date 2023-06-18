import {useDisclosure} from '@mantine/hooks';
import {Drawer, Button, Group, TextInput, Checkbox} from '@mantine/core';
import {useForm} from "@mantine/form";
import {DataType} from "../../api/mainApi.ts";
import {appThunk} from "../../app/app.slice.ts";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch.ts";


export const DataRequest = () => {
    const [opened, {open, close}] = useDisclosure(false);
    const dispatch = useAppDispatch()

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

    const onSendData = async (value: DataType) => {
        await dispatch(appThunk.sendEmail(value))
        close()
    }


    return (
        <>
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
                        <a href={'xxxx'} target={'_blank'}>Политика конфиденциальности</a>
                    </div>

                    <Group position="right" mt="md">
                        <Button type="submit"
                                disabled={disabledButton}
                        >Отправить</Button>
                    </Group>
                </form>
            </Drawer>

            <Group position="center">
                <Button onClick={open}>Запросить прайс</Button>
            </Group>
        </>
    );
}