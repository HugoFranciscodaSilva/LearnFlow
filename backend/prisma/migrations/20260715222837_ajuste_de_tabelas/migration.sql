/*
  Warnings:

  - Added the required column `ordem` to the `aulas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instrutor_id` to the `cursos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "aulas" ADD COLUMN     "ordem" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "cursos" ADD COLUMN     "instrutor_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "cargo" SET DEFAULT 'Estudante';

-- CreateTable
CREATE TABLE "matriculas" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matriculas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlunoProgresso" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "aulaId" INTEGER NOT NULL,
    "concluido_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlunoProgresso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "matriculas_alunoId_key" ON "matriculas"("alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "AlunoProgresso_alunoId_aulaId_key" ON "AlunoProgresso"("alunoId", "aulaId");

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_instrutor_id_fkey" FOREIGN KEY ("instrutor_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoProgresso" ADD CONSTRAINT "AlunoProgresso_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
