import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1723670263029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE public.address (
            id integer NOT NULL,
            street character varying(255) NOT NULL,
            number character varying(255) NOT NULL,
            complement character varying(255),
            district character varying(255) NOT NULL,
            city_id integer NOT NULL,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now(),
            PRIMARY KEY (id)
        );
        
        CREATE SEQUENCE public.address_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;

        ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE public.address`);
    }

}
