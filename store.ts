// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

// Usuário
Table user {
  id uuid [primary key]
  username varchar
  password varchar
  change_password boolean
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp  
}

// Níveis de acessos
Table access_levels {
  id uuid [primary key]
  name varchar
  code varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Filial
Table branch {
  id uuid [primary key]
  name varchar
  type enum
  cep varchar
  street varchar
  number varchar
  district varchar
  state varchar
  uf varchar
  country varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

//Perfil de usuário
Table user_profiles {
  id uuid [primary key]
  user_id uuid
  branch_id uuid
  access_level_id uuid
  name varchar
  default_profile boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Modulos do sistema
Table module {
  id uuid [primary key]
  name varchar
  code varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Permissão de acesso aos módulos
Table access_modules {
  id uuid [primary key]
  access_level_id uuid
  module_id uuid
  read boolean
  write boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Países
Table country {
  id uuid [primary key]
  sigla varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Estados
Table state {
  id uuid [primary key]
  country_id uuid
  sigla varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Cidades
Table city {
  id uuid [primary key]
  state_id uuid
  sigla varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Grau de instrução
Table degree_instruction {
  id uuid [primary key]
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Cor/raça
Table color_race {
  id uuid [primary key]
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Profissão
Table profission {
  id uuid [primary key]
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Situação do funcionário
Table situation_employee {
  id uuid [primary key]
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipo de Recebimento
Table type_receipt {
  id uuid [primary key]
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipo de Funcionário
Table employee_type {
  id uuid [primary key]
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Seção
Table section {
  id uuid [primary key]
  branch_id uuid
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Cargo
Table office {
  id uuid [primary key]
  branch_id uuid
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Função
Table function {
  id uuid [primary key]
  branch_id uuid
  office_id uuid
  CBO varchar
  code varchar
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Turnos
Table shift {
  id uuid [primary key]
  branch_id uuid
  code varchar
  name varchar
  initial_time time
  final_time time
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Horários de trabalho
Table work_schedule {
  id uuid [primary key]
  branch_id uuid
  shift_id uuid
  code varchar
  monday boolean
  tuesday boolean
  wednesday boolean
  thursday boolean
  friday boolean
  saturday boolean
  sunday boolean
  initial_time time
  final_time time
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Pessoa
Table person {
  id uuid [primary key]
  user_id uuid
  image varchar
  name varchar
  first_name varchar
  email varchar
  surname varchar
  have_social_name boolean
  social_name varchar
  birth_date varchar
  age varchar
  gender varchar
  cpf varchar
  marital_status varchar
  nationality_id uuid
  home_state_id uuid
  home_city_id uuid
  degree_instruction uuid
  color_race_id uuid
  profission_id uuid
  identity varchar
  emittering_state_identity varchar
  organ_emitter_identity varchar
  date_issue varchar
  voter_number varchar
  zone_voter varchar
  section_voter varchar
  work_card varchar
  work_serie varchar
  work_state_emitter varchar
  work_date_issue varchar
  driver_license varchar
  driver_license_type varchar
  driver_license_due_date varchar
  driver_license_issuance_date varchar
  driver_license_state_emitter varchar
  driver_license_first_date_emitter varchar
  reservist_certificate varchar
  category_military varchar
  situation_military varchar
  rnm varchar
  passport_number varchar
  passport_issue_date varchar
  passport_validade_date varchar
  cep varchar
  street varchar
  number varchar
  complement varchar
  district varchar
  city varchar
  state varchar
  country varchar
  phone_one varchar
  phone_two varchar
  phone_three varchar
  physical boolean
  speaks boolean
  visual boolean
  mental boolean
  rehabilitation boolean
  hearing boolean
  blood_type varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Funcionários
Table employee {
  id uuid [primary key]
  code varchar
  person_id uuid
  branch_id uuid
  type_receipt_id uuid
  sitation_id uuid
  section_id uuid
  function_id uuid
  work_schedule_id uuid
  employee_type_id uuid
  salary money
  admission_date datetime
  admission_type varchar
  demission_date datetime
  demission_type varchar
  date_shutdown datetime
  date_transfer datetime
  reason_admission varchar
  reason_dismissal varchar
  warning_days integer
  vacation_due_date datetime
  vacation_initial datetime
  vacation_final datetime
  vacation_advance_days integer
  vacation_days decimal
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Seguimento do cli/for
Table    {
  id uuid [primary key]
  name varchar
  code varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipo do cli/for
Table supplier_customer_type{
  id uuid [primary key]
  segment_id uuid
  name varchar
  code varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// cliente fornecedor
Table customer_supplier {
  id uuid [primary key]
  branch_id uuid
  code varchar
  name varchar
  fantasy_name varchar
  email varchar
  classification varchar
  category varchar
  cgcfo varchar
  state_registration varchar
  municipal_registration varchar
  supplier_customer_type_id uuid
  status boolean
  blocked boolean
  nationality_id uuid
  cep_main varchar
  street_main varchar
  number_main varchar
  district_main varchar
  state_main varchar
  uf_main varchar
  country_main varchar
  phone_one_main varchar
  phone_two_main varchar
  phone_three_main varchar
  contact_name_main varchar
  cep_payment varchar
  street_payment varchar
  number_payment varchar
  district_payment varchar
  state_payment varchar
  uf_payment varchar
  country_payment varchar
  phone_one_payment varchar
  phone_two_payment varchar
  phone_three_payment varchar
  contact_name_payment varchar
  cep_delivery varchar
  street_delivery varchar
  number_delivery varchar
  district_delivery varchar
  state_delivery varchar
  uf_delivery varchar
  country_delivery varchar
  contact_name_delivery varchar
  phone_one_delivery varchar
  phone_two_delivery varchar
  phone_three_delivery varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

//categoria do produto
Table category {
  id uuid [primary key]
  name varchar
  code varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// sub-categoria do produto
Table sub_category {
  id uuid [primary key]
  category_id uuid
  name varchar
  code varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipo do produto
Table product_type {
  id uuid [primary key]
  name varchar
  code varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipos de pagamentos
Table payment_type {
  id uuid [primary key]
  name varchar
  description varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipo de moeda
Table coin_type {
  id uuid [primary key]
  sigla varchar
  name varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tipo de unidades
Table unity_type {
  id uuid [primary key]
  code varchar
  name varchar
  description text
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Produtos
Table products {
  id uuid [primary key]
  branch_id uuid
  category_id uuid
  product_type_id uuid
  coin_type_id uuid
  unity_type_id uuid
  image varchar
  code varchar
  name varchar
  price varchar
  promotion_price varchar
  division_price_integer varchar
  division_quantity_price varchar
  division_price varchar
  code_bar varchar
  quantity integer
  description text
  brand varchar
  color varchar
  size varchar
  gender varchar
  age_group varchar
  station varchar
  bottom_fabric varchar
  upper_fabric varchar
  piece_fabric varchar
  composition varchar
  validade date
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Classificação dos produtos
Table classification_products {
  id uuid [primary key]
  products_id uuid
  classification varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Tabela de medidas
Table measurement_chart {
  id uuid [primary key]
  products_id uuid
  name varchar
  size varchar
  bust varchar
  waist varchar
  length_bust varchar
  length_waist varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Desconto dos produtos
Table product_discount {
  id uuid [primary key]
  products_id uuid
  buy varchar
  sell varchar
  comission_one varchar
  comission_thwo varchar
  comission_three varchar
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}

// Ordem de compra
Table purchase_order {
  id uuid [primary key]
  branch_id uuid
  customer_supplier_id uuid
  payment_type_id uuid
  products_id uuid
  coupon varchar
  number_purchase varchar
  series varchar
  issuance_date datetime
  delivery_date datetime
  expected_date datetime
  product_code varchar
  product_name varchar
  quantity varchar
  unity varchar
  gross_value varchar
  unitary_value varchar
  total_price varchar
  subtotal varchar
  observation text
  freight_percente varchar
  freight_value varchar
  safe varchar
  insurance_price varchar
  discount_price varchar
  discount_percente varchar
  commission varchar
  employee_commission varchar
  menssage text
  species varchar
  status boolean
  created_at timestamp
  updated_at timestamp
  deleted_at timestamp
}


Ref: user_profiles.user_id < user.id
Ref: user_profiles.branch_id > branch.id
Ref: user_profiles.access_level_id > access_levels.id
Ref: access_modules.access_level_id < access_levels.id
Ref: access_modules.module_id > module.id
Ref: supplier_customer_type.segment_id < segment.id
Ref: supplier_customer_type.id < customer_supplier.supplier_customer_type_id
Ref: category.id < sub_category.category_id
Ref: category.id < products.category_id
Ref: products.id < measurement_chart.products_id
Ref: product_type.id < products.product_type_id
Ref: branch.id < products.branch_id
Ref: unity_type.id < products.unity_type_id
Ref: products.id < product_discount.products_id
Ref: coin_type.id < products.coin_type_id
Ref: products.id < classification_products.products_id
Ref: branch.id < customer_supplier.branch_id
Ref: country.id < state.country_id
Ref: state.id < city.state_id
Ref: country.id < customer_supplier.nationality_id
Ref: branch.id < purchase_order.branch_id
Ref: customer_supplier.id < purchase_order.customer_supplier_id
Ref: payment_type.id < purchase_order.payment_type_id
Ref: customer_supplier.id < purchase_order.products_id
Ref: user.id < person.user_id
Ref: color_race.id < person.color_race_id
Ref: profission.id < person.profission_id
Ref: degree_instruction.id < person.degree_instruction
Ref: country.id < person.nationality_id
Ref: situation.id < employee.sitation_id
Ref: type_receipt.id < employee.type_receipt_id
Ref: shift.id < work_schedule.shift_id
Ref: employee_type.id < employee.employee_type_id
Ref: section.id < employee.section_id
Ref: function.id < employee.function_id
Ref: work_schedule.id < employee.work_schedule_id
Ref: office.id < function.office_id
Ref: branch.id < employee.branch_id
Ref: branch.id < section.branch_id
Ref: branch.id < function.branch_id
Ref: branch.id < office.branch_id
Ref: branch.id < work_schedule.branch_id
Ref: branch.id < shift.branch_id
Ref: person.id < employee.person_id
