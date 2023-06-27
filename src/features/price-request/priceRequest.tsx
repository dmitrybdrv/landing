import {useDisclosure} from '@mantine/hooks';
import {Button, Group} from '@mantine/core';
import {RequestForm} from "../../components/request-form/RequestForm.tsx";

/**
 * PriceRequest - форма запроса письма на эл.почту
 */
export const PriceRequest = () => {

    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <RequestForm opened={opened} close={close}/>
            <Group position="center">
                <Button onClick={open}>Запросить прайс</Button>
            </Group>
        </>
    );
}