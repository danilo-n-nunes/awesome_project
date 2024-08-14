import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableState1723670233225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE public.state (
            id integer NOT NULL,
            name character varying(255) NOT NULL,
            uf character varying(2) NOT NULL,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now(),
            PRIMARY KEY (id)
        );
        
        CREATE SEQUENCE public.state_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.state_id_seq OWNED BY public.state.id;

        ALTER TABLE ONLY public.state ALTER COLUMN id SET DEFAULT nextval('public.state_id_seq'::regclass);
            
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE public.state`);
    }

}
