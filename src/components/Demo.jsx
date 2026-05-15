import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo({ img , title }) {   //props se : image,title acces krna
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src ={img} // dynamic image
          height={160}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
       View Details
      </Button>
    </Card>
  );
}

export default Demo;