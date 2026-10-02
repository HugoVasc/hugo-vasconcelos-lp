// Dados de PJ — PREPARADO, MAS FORA DE USO.
// Quando o CNPJ for emitido: preencha os campos abaixo e renderize
// <CompanyInfo locale={lang} /> no final de app/[lang]/page.tsx (há um comentário lá).
// Nenhum desses dados é exibido enquanto o componente não for importado.

export type CompanyData = {
  legalName: string;
  tradeName?: string;
  cnpj: string;
  address?: string;
  city?: string;
  email?: string;
  phone?: string;
};

export const company: CompanyData | null = null;
// Exemplo:
// export const company: CompanyData = {
//   legalName: "Hugo Vasconcelos Serviços de Dados LTDA",
//   tradeName: "HV Data",
//   cnpj: "00.000.000/0001-00",
//   city: "São Paulo, SP",
//   email: "contato@exemplo.com.br",
// };
