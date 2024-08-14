import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInCity1723670610169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`INSERT INTO public.city (name, state_id) VALUES ('São Paulo', 1);
            INSERT INTO public.city (name, state_id) VALUES ('Rio de Janeiro', 2);
            INSERT INTO public.city (name, state_id) VALUES ('Brasília', 3);
            INSERT INTO public.city (name, state_id) VALUES ('Belo Horizonte', 4);
            INSERT INTO public.city (name, state_id) VALUES ('Curitiba', 5);
            INSERT INTO public.city (name, state_id) VALUES ('Porto Alegre', 6);
            INSERT INTO public.city (name, state_id) VALUES ('Salvador', 7);
            INSERT INTO public.city (name, state_id) VALUES ('Fortaleza', 8);
            INSERT INTO public.city (name, state_id) VALUES ('Recife', 9);
            INSERT INTO public.city (name, state_id) VALUES ('Manaus', 10);
            INSERT INTO public.city (name, state_id) VALUES ('Belém', 11);
            INSERT INTO public.city (name, state_id) VALUES ('Goiânia', 12);
            INSERT INTO public.city (name, state_id) VALUES ('São Luís', 13);
            INSERT INTO public.city (name, state_id) VALUES ('João Pessoa', 14);
            INSERT INTO public.city (name, state_id) VALUES ('Teresina', 15);
            INSERT INTO public.city (name, state_id) VALUES ('Natal', 16);
            INSERT INTO public.city (name, state_id) VALUES ('Campo Grande', 17);
            INSERT INTO public.city (name, state_id) VALUES ('Cuiabá', 18);
            INSERT INTO public.city (name, state_id) VALUES ('Palmas', 19);
            INSERT INTO public.city (name, state_id) VALUES ('Rio Branco', 20);
            INSERT INTO public.city (name, state_id) VALUES ('Macapá', 21);
            INSERT INTO public.city (name, state_id) VALUES ('Porto Velho', 22);
            INSERT INTO public.city (name, state_id) VALUES ('Boa Vista', 23);
            INSERT INTO public.city (name, state_id) VALUES ('Florianópolis', 24);
            INSERT INTO public.city (name, state_id) VALUES ('Aracaju', 25);
            INSERT INTO public.city (name, state_id) VALUES ('Vitória', 26);
            INSERT INTO public.city (name, state_id) VALUES ('Maceió', 27);
            INSERT INTO public.city (name, state_id) VALUES ('São Paulo', 28);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
