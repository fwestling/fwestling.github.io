import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p>Hello from About!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti
        unde iste reiciendis voluptatibus. Sit, veniam officiis aliquam soluta
        necessitatibus sequi quo porro, ex repellendus doloremque tempora
        perferendis ab dolorum!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aut
        aperiam sit optio magni quibusdam repellendus est deleniti enim soluta
        asperiores praesentium, tenetur repudiandae pariatur, quaerat mollitia
        incidunt impedit repellat ipsum cum qui, inventore sapiente modi.
        Laboriosam eius non, officiis natus quod tempore quaerat veritatis
        pariatur fugit exercitationem consequuntur molestias cum atque quis nemo
        doloribus sed tempora eum facilis explicabo aut voluptates, magnam
        quasi! Sed perspiciatis consequuntur veniam adipisci deleniti
        accusantium maiores eos aperiam quisquam? Excepturi debitis neque, autem
        cumque ea eius dolore doloribus sunt consectetur, dicta dolores numquam
        pariatur eos consequuntur quos eveniet placeat aliquam! Distinctio
        perferendis unde dolor sed, sit expedita consequuntur eveniet in,
        possimus soluta fugit veniam sapiente illum. Odio rem ex nobis excepturi
        in officia. Hic atque eos nesciunt exercitationem magnam qui ipsa
        incidunt, consequatur, id provident maxime ipsum, animi velit voluptatum
        ducimus molestias itaque doloribus delectus. Nobis pariatur ex saepe
        natus ab tempora, vitae eum deleniti ducimus odio voluptas dolore minima
        incidunt? Sapiente, nisi magni non totam ratione eius error quos ex unde
        sed saepe hic ut velit maxime laudantium commodi in quisquam dolorum.
        Quibusdam, illum. Nostrum consectetur, pariatur incidunt ex porro
        sapiente eum inventore temporibus possimus deleniti omnis cum nulla sit
        velit, placeat dolorum!
      </p>
    </div>
  );
}
