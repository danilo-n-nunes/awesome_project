import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInState1723670600341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`INSERT INTO public.state (name, uf) VALUES ('Acre', 'AC');
            INSERT INTO public.state (name, uf) VALUES ('Alagoas', 'AL');
            INSERT INTO public.state (name, uf) VALUES ('Amapá', 'AP');
            INSERT INTO public.state (name, uf) VALUES ('Amazonas', 'AM');
            INSERT INTO public.state (name, uf) VALUES ('Bahia', 'BA');
            INSERT INTO public.state (name, uf) VALUES ('Ceará', 'CE');
            INSERT INTO public.state (name, uf) VALUES ('Distrito Federal', 'DF');
            INSERT INTO public.state (name, uf) VALUES ('Espírito Santo', 'ES');
            INSERT INTO public.state (name, uf) VALUES ('Goiás', 'GO');
            INSERT INTO public.state (name, uf) VALUES ('Maranhão', 'MA');
            INSERT INTO public.state (name, uf) VALUES ('Mato Grosso', 'MT');
            INSERT INTO public.state (name, uf) VALUES ('Mato Grosso do Sul', 'MS');
            INSERT INTO public.state (name, uf) VALUES ('Minas Gerais', 'MG');
            INSERT INTO public.state (name, uf) VALUES ('Pará', 'PA');
            INSERT INTO public.state (name, uf) VALUES ('Paraíba', 'PB');
            INSERT INTO public.state (name, uf) VALUES ('Paraná', 'PR');
            INSERT INTO public.state (name, uf) VALUES ('Pernambuco', 'PE');
            INSERT INTO public.state (name, uf) VALUES ('Piauí', 'PI');
            INSERT INTO public.state (name, uf) VALUES ('Rio de Janeiro', 'RJ');
            INSERT INTO public.state (name, uf) VALUES ('Rio Grande do Norte', 'RN');
            INSERT INTO public.state (name, uf) VALUES ('Rio Grande do Sul', 'RS');
            INSERT INTO public.state (name, uf) VALUES ('Rondônia', 'RO');
            INSERT INTO public.state (name, uf) VALUES ('Roraima', 'RR');
            INSERT INTO public.state (name, uf) VALUES ('Santa Catarina', 'SC');
            INSERT INTO public.state (name, uf) VALUES ('São Paulo', 'SP');
            INSERT INTO public.state (name, uf) VALUES ('Sergipe', 'SE');
            INSERT INTO public.state (name, uf) VALUES ('Tocantins', 'TO');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DELETE FROM public.state;`);
    }

}
