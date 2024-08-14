import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1723668332285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(` CREATE TABLE public.user (
            id integer NOT NULL,
            name character varying(255) NOT NULL,
            email character varying(255) NOT NULL,
            phone character varying(255),
            cpf character varying(255) NOT NULL,
            type_user int NOT NULL,
            password character varying(255) NOT NULL,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now(),
            PRIMARY KEY (id)
        );
        
        CREATE SEQUENCE public.user_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.user_id_seq OWNED BY public.user.id;

        ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
            
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE public.user`);
    }

}
