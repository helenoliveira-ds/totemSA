/**
 * Totem alimentaSesi - Módulo de Controle Interativo (script.js)
 * Desenvolvido por um especialista Front-end Senior em totens touch.
 */

// Objeto de dados temporários para estruturação de conteúdo prévio com as cores oficiais
const TEMAS_PLACEHOLDER = {
  "impacto": {
    titulo: "Impacto em Números",
    cor: "var(--color-green-hover)",
    texto: `
      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 24px;">
        A alimentaSesi desenvolveu sua expertise ao longo de mais de 40 anos de atuação, atendendo diversas indústrias do Brasil e ajudando a alimentar milhares de trabalhadores.
      </p>
      <div class="impacto-grid">
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 100 mil</span>
          <span class="impacto-rotulo">refeições por dia</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 2.100</span>
          <span class="impacto-rotulo">colaboradores</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 100</span>
          <span class="impacto-rotulo">restaurantes in company</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 50</span>
          <span class="impacto-rotulo">cidades atendidas</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">10</span>
          <span class="impacto-rotulo">estados com presença</span>
        </div>
        <div class="impacto-card">
          <span class="impacto-numero" style="color: var(--color-green-hover);">+ 20</span>
          <span class="impacto-rotulo">unidades transportadas</span>
        </div>
      </div>
    `
  },
  "educacao": {
    titulo: "Educação Nutricional",
    cor: "var(--color-green-hover)",
    texto: `
      <!-- Imagem de topo -->
      <img src="./assets/img_education_main.jpg" alt="Educação Nutricional alimentaSesi" class="panel-img" onerror="this.style.display='none';" />

      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
        Promovemos, de forma contínua, ações que incentivam hábitos alimentares mais saudáveis, reconhecendo a alimentação como um fator essencial para a saúde, o bem-estar e a qualidade de vida dos trabalhadores.
      </p>

      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 30px;">
        Ao longo do ano, seguimos um calendário de campanhas temáticas, desenvolvido com base em diretrizes técnicas. As ações combinam orientações, conteúdos informativos e atividades práticas para conscientizar sobre alimentação saudável, segurança alimentar e prevenção de doenças. Conheça algumas das iniciativas:
      </p>

      <!-- Cards de Iniciativas -->
      <div class="initiative-card card-green">
        <h3 class="initiative-title">Alimentação Saudável</h3>
        <p class="initiative-desc">Nutricionistas orientam os trabalhadores sobre como montar refeições mais equilibradas, aproveitando as opções disponíveis no cardápio.</p>
      </div>

      <div class="initiative-card card-yellow">
        <h3 class="initiative-title">Feito no Forno</h3>
        <p class="initiative-desc">Incentiva a substituição de alimentos fritos por opções assadas e grelhadas, destacando os benefícios dessa escolha para a saúde.</p>
      </div>

      <div class="initiative-card card-blue">
        <h3 class="initiative-title">Hábitos Saudáveis</h3>
        <p class="initiative-desc">Promove o consumo consciente e a redução do desperdício de alimentos, reforçando a importância de atitudes mais sustentáveis.</p>
      </div>

      <div class="initiative-card card-pink">
        <h3 class="initiative-title">Controle do Sódio</h3>
        <p class="initiative-desc">Estimula a redução do consumo de sódio e incentiva o uso de temperos naturais, contribuindo para uma alimentação mais saudável.</p>
      </div>

      <!-- Imagem de rodapé -->
      <img src="./assets/img_education_footer.jpg" alt="Atividades Práticas Sesi" class="panel-img" style="margin-top: 16px;" onerror="this.style.display='none';" />
    `
  },
  "equipe": {
    titulo: "Nossa Equipe",
    cor: "var(--color-blue)",
    texto: `
      <!-- Imagem Principal da Equipe -->
      <img src="./assets/img_team_main.jpg" alt="Nossa Equipe alimentaSesi" class="panel-img" onerror="this.style.display='none';" />

      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 24px;">
        Pessoas comprometidas com cada etapa do processo, garantindo qualidade técnica e dedicação em cada detalhe operacional.
      </p>

      <h3 style="font-family: var(--font-title); font-size: 20px; font-weight: 800; color: var(--color-blue); margin-bottom: 18px; margin-top: 24px;">Quem Faz Acontecer:</h3>
      
      <div class="accordion-container" style="margin-bottom: 30px;">
        <!-- Nutricionistas -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; color: var(--color-blue);"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/><path d="M9 22a7 7 0 0 1-7-7c4-2 6-3 14-3"/></svg>
              <span class="accordion-title">Nutricionistas</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Nossas nutricionistas realizam o planejamento técnico, a elaboração de cardápios balanceados e supervisionam todas as boas práticas de fabricação nas unidades operacionais, garantindo o padrão de excelência nutricional e segurança alimentar.
            </div>
          </div>
        </div>

        <!-- Cozinheiros -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; color: var(--color-blue);"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              <span class="accordion-title">Cozinheiros</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Preparam as refeições diárias com carinho, tempero único e rigorosos padrões de higiene, trazendo o verdadeiro sabor de comida caseira que conforta e nutre os trabalhadores das indústrias brasileiras.
            </div>
          </div>
        </div>

        <!-- Auxiliares de Cozinha -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; color: var(--color-blue);"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
              <span class="accordion-title">Auxiliares de Cozinha</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Dão suporte essencial em todo o fluxo operacional, desde o recebimento de mercadorias, higienização dos insumos e do ambiente, até a montagem cuidadosa e a distribuição das refeições aos clientes.
            </div>
          </div>
        </div>

        <!-- Chefs de Cozinha -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; color: var(--color-blue);"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              <span class="accordion-title">Chefs de Cozinha</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text" style="display: flex; flex-direction: column; gap: 14px;">
              <img src="./assets/img_chef.jpg" alt="Chef de Cozinha" class="panel-img" style="margin-top: 8px; margin-bottom: 4px;" onerror="this.style.display='none';" />
              <p style="font-size: 16px; line-height: 1.5; color: var(--text-secondary); margin: 0;">
                Contamos com uma equipe de chefs instrutores altamente qualificados, com sólida formação técnica e ampla experiência em gastronomia coletiva e serviços de alimentação. Esses profissionais desempenham papel estratégico na Garantia de Entrega da alimentaSesi, assegurando a padronização, a qualidade e a excelência dos serviços prestados em todas as Unidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção: O Jeito alimentaSesi de Atender -->
      <div class="secao-destaque" style="border-left: 6px solid var(--color-blue); margin-bottom: 30px;">
        <h3 class="secao-titulo-destaque">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          O Jeito alimentaSesi de Atender
        </h3>
        
        <p style="font-size: 16px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 12px;">
          O Jeito alimentaSesi de Atender reflete nosso compromisso com a excelência no atendimento e na qualidade das refeições.
        </p>

        <p style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
          Nosso compromisso é entregar:
        </p>

        <ul class="compromisso-list">
          <li class="compromisso-item">
            <svg class="compromisso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Atendimento humanizado e acolhedor;</span>
          </li>
          <li class="compromisso-item">
            <svg class="compromisso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Refeições saudáveis, saborosas e seguras;</span>
          </li>
          <li class="compromisso-item">
            <svg class="compromisso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Agilidade e eficiência na solução de demandas;</span>
          </li>
          <li class="compromisso-item">
            <svg class="compromisso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Padrão de qualidade consistente em todas as unidades.</span>
          </li>
        </ul>

        <p style="font-size: 15px; line-height: 1.5; color: var(--text-secondary); margin-top: 14px; margin-bottom: 18px; font-style: italic;">
          Confiança, Cortesia, Empatia e Solução são os pilares que orientam nossa atuação e garantem uma experiência positiva para cada cliente, todos os dias.
        </p>

        <!-- Flashcards Interativos dos Pilares -->
        <p style="font-size: 13px; font-weight: 700; color: var(--color-blue); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; text-align: center;">
          ⚡ Interativo: Toque nos pilares para explorar
        </p>
        <div class="flip-card-grid">
          <!-- Confiança -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="border-color: #3b82f6;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <h4 style="color: #3b82f6;">Confiança</h4>
                <div class="tap-indicator" style="color: #3b82f6;">Toque <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
              </div>
              <div class="flip-card-back" style="background-color: #3b82f6; border-color: #3b82f6;">
                <h4>Confiança</h4>
                <p>Construímos relações sólidas e transparentes por meio da integridade e excelência técnica.</p>
              </div>
            </div>
          </div>
          <!-- Cortesia -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="border-color: #10b981;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                <h4 style="color: #10b981;">Cortesia</h4>
                <div class="tap-indicator" style="color: #10b981;">Toque <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
              </div>
              <div class="flip-card-back" style="background-color: #10b981; border-color: #10b981;">
                <h4>Cortesia</h4>
                <p>Atendemos sempre com um sorriso sincero, educação, respeito e atenção dedicada.</p>
              </div>
            </div>
          </div>
          <!-- Empatia -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="border-color: #ec4899;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <h4 style="color: #ec4899;">Empatia</h4>
                <div class="tap-indicator" style="color: #ec4899;">Toque <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
              </div>
              <div class="flip-card-back" style="background-color: #ec4899; border-color: #ec4899;">
                <h4>Empatia</h4>
                <p>Compreendemos as necessidades do outro para oferecer acolhimento real e humano.</p>
              </div>
            </div>
          </div>
          <!-- Solução -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="border-color: #f59e0b;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <h4 style="color: #f59e0b;">Solução</h4>
                <div class="tap-indicator" style="color: #f59e0b;">Toque <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
              </div>
              <div class="flip-card-back" style="background-color: #f59e0b; border-color: #f59e0b;">
                <h4>Solução</h4>
                <p>Agimos de forma proativa e ágil para solucionar qualquer demanda com eficácia.</p>
              </div>
            </div>
          </div>
        </div>

        <img src="./assets/img_atendimento_humanizado.jpg" alt="O Jeito alimentaSesi de Atender" class="panel-img" style="margin-top: 16px; margin-bottom: 0;" onerror="this.style.display='none';" />
      </div>

      <!-- Seção: Treinamentos -->
      <div class="secao-destaque" style="border-left: 6px solid var(--color-green-hover);">
        <h3 class="secao-titulo-destaque" style="color: var(--color-green-hover);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Treinamentos e Capacitação
        </h3>

        <p style="font-size: 16px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 20px;">
          Nas unidades alimentaSesi a segurança, a qualidade e o cumprimento das boas práticas são prioridades permanentes. Para sustentar esse compromisso, adotamos uma estratégia estruturada, contínua e padronizada de capacitação, garantindo que todos os colaboradores estejam tecnicamente preparados para o desempenho seguro e eficiente de suas funções.
        </p>

        <img src="./assets/img_team_training.jpg" alt="Capacitação Contínua alimentaSesi" class="panel-img" style="margin-bottom: 24px;" onerror="this.style.display='none';" />

        <p style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">
          Metodologia Híbrida de Capacitação:
        </p>

        <!-- Flashcards Interativos de Treinamento -->
        <p style="font-size: 13px; font-weight: 700; color: var(--color-green-hover); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; text-align: center;">
          ⚡ Interativo: Toque para virar o cartão e ler os detalhes
        </p>
        
        <div class="flip-card-grid" style="grid-template-columns: 1fr; gap: 20px;">
          <!-- Presenciais -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 160px;">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="border-left: 6px solid var(--color-blue); align-items: flex-start; text-align: left; padding: 20px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <h4 style="margin: 0; font-size: 18px; color: var(--color-blue);">Treinamentos Presenciais</h4>
                </div>
                <p style="text-align: left; font-size: 14px; color: var(--text-secondary); margin: 0; line-height: 1.4;">Foco prático: Atendimento, rotinas de cozinha e segurança.</p>
                <div class="tap-indicator" style="color: var(--color-blue); margin-top: auto;">Toque para ver conteúdos <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
              </div>
              <div class="flip-card-back" style="background-color: var(--color-blue); border-color: var(--color-blue); text-align: left; align-items: flex-start; padding: 20px; display: flex; flex-direction: column; justify-content: center;">
                <h4 style="font-size: 15px; margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 4px; width: 100%;">Treinamentos Presenciais</h4>
                <p style="text-align: left; font-size: 13.5px; line-height: 1.4; margin: 0;">Presenciais, voltados a conteúdos práticos, como Atendimento, rotinas operacionais, Segurança do Trabalho e Diálogos Diários de Segurança (DDS).</p>
              </div>
            </div>
          </div>

          <!-- On-line -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 160px;">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="border-left: 6px solid var(--color-green-hover); align-items: flex-start; text-align: left; padding: 20px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-green-hover)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <h4 style="margin: 0; font-size: 18px; color: var(--color-green-hover);">Treinamentos On-line</h4>
                </div>
                <p style="text-align: left; font-size: 14px; color: var(--text-secondary); margin: 0; line-height: 1.4;">Foco institucional: Normas NPs, trilhas e gestão digital.</p>
                <div class="tap-indicator" style="color: var(--color-green-hover); margin-top: auto;">Toque para ver conteúdos <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
              </div>
              <div class="flip-card-back" style="background-color: var(--color-green-hover); border-color: var(--color-green-hover); text-align: left; align-items: flex-start; padding: 20px; display: flex; flex-direction: column; justify-content: center;">
                <h4 style="font-size: 15px; margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 4px; width: 100%;">Treinamentos On-line</h4>
                <p style="text-align: left; font-size: 13.5px; line-height: 1.4; margin: 0;">On-line, aplicados a conteúdos institucionais, Normas Padronizadas (NPs), Sistema Genial, Rotinas de Gestão e Trilha da Nutricionista, garantindo padronização, alcance e rastreabilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  "cozinha": {
    titulo: "Cozinha Industrial",
    cor: "var(--color-orange)",
    texto: `
      <!-- Imagem de Cabeçalho -->
      <img src="./assets/img_kitchen_main.jpg" alt="Bastidores de Alta Performance" class="panel-img" onerror="this.style.display='none';" />

      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 24px;">
        Os bastidores da nossa operação de grande escala: cada etapa segue padrões técnicos de máxima qualidade e segurança alimentar.
      </p>

      <!-- Sistema de Gestão da Qualidade -->
      <div class="secao-destaque" style="border-left: 6px solid var(--color-orange); margin-bottom: 24px;">
        <h3 class="secao-titulo-destaque" style="color: var(--color-orange);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Sistema de Gestão da Qualidade
        </h3>
        <p style="font-size: 15px; line-height: 1.6; color: var(--text-secondary); margin: 0;">
          A alimentaSesi atua de forma rigorosa na promoção e manutenção das Boas Práticas de Manipulação de Alimentos, em total conformidade com os critérios e diretrizes estabelecidos pela Agência Nacional de Vigilância Sanitária (ANVISA) e demais legislações aplicáveis.
        </p>
      </div>

      <!-- Saúde e Segurança - Cozinha Segura -->
      <div class="secao-destaque" style="border-left: 6px solid var(--color-orange); margin-bottom: 24px;">
        <h3 class="secao-titulo-destaque" style="color: var(--color-orange);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Saúde e Segurança - Cozinha Segura
        </h3>
        <p style="font-size: 15px; line-height: 1.6; color: var(--text-secondary); margin: 0;">
          A alimentaSesi adota um programa estruturado e contínuo voltado à prevenção de acidentes e doenças relacionadas ao trabalho, bem como à garantia da segurança dos alimentos servidos, promovendo ambientes laborais seguros, saudáveis e em conformidade com as boas práticas e legislações vigentes.
        </p>
      </div>

      <!-- Cozinha Inovadora -->
      <div class="secao-destaque" style="border-left: 6px solid var(--color-orange); margin-bottom: 24px;">
        <h3 class="secao-titulo-destaque" style="color: var(--color-orange);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          Cozinha Inovadora
        </h3>
        <p style="font-size: 15px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 20px;">
          A alimentaSesi investe continuamente em novas tecnologias e aprimoramento de processos, com o objetivo de aumentar a produtividade, otimizar recursos e reduzir riscos operacionais, promovendo ambientes de trabalho mais seguros, sustentáveis e eficientes.
        </p>

        <!-- Grade Interativa de Equipamentos (2x2) -->
        <p style="font-size: 13px; font-weight: 700; color: var(--color-orange); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; text-align: center;">
          ⚡ Interativo: Toque nos equipamentos para ver suas vantagens
        </p>

        <div class="flip-card-grid" style="grid-template-columns: repeat(2, 1fr); gap: 16px;">
          
          <!-- Forno Combinado -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="padding: 0; position: relative; border-color: var(--color-orange); overflow: hidden;">
                <!-- Imagem se houver -->
                <img src="./assets/equip_forno_combinado.jpg" alt="Forno Combinado" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <!-- Fallback Icon if Image Missing -->
                <div style="display: none; width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; background-color: var(--color-orange-light); border-radius: 16px; padding: 16px;">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/><circle cx="12" cy="10" r="4"/></svg>
                </div>
                <!-- Overlay Title -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)); padding: 12px; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; text-align: left;">
                  <h4 style="color: white; font-size: 14px; font-family: var(--font-title); font-weight: 700; margin: 0;">Forno Combinado</h4>
                  <div style="font-size: 10px; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 3px; margin-top: 2px;">Toque <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                </div>
              </div>
              <div class="flip-card-back" style="background-color: var(--color-orange); border-color: var(--color-orange); padding: 16px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left;">
                <h4 style="font-size: 14px; margin-bottom: 4px; color: white; width: 100%;">Forno Combinado</h4>
                <p style="font-size: 11.5px; line-height: 1.4; text-align: left; margin: 0; color: white;">
                  Permite preparar múltiplos alimentos simultaneamente com controle rigoroso de temperatura e vapor. Garante padronização extrema, preservação do valor nutricional e alta eficiência energética.
                </p>
              </div>
            </div>
          </div>

          <!-- Ivário -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="padding: 0; position: relative; border-color: var(--color-orange); overflow: hidden;">
                <!-- Imagem se houver -->
                <img src="./assets/equip_ivario.jpg" alt="Ivário" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <!-- Fallback Icon if Image Missing -->
                <div style="display: none; width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; background-color: var(--color-orange-light); border-radius: 16px; padding: 16px;">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <!-- Overlay Title -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)); padding: 12px; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; text-align: left;">
                  <h4 style="color: white; font-size: 14px; font-family: var(--font-title); font-weight: 700; margin: 0;">Ivário</h4>
                  <div style="font-size: 10px; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 3px; margin-top: 2px;">Toque <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                </div>
              </div>
              <div class="flip-card-back" style="background-color: var(--color-orange); border-color: var(--color-orange); padding: 16px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left;">
                <h4 style="font-size: 14px; margin-bottom: 4px; color: white; width: 100%;">Ivário</h4>
                <p style="font-size: 11.5px; line-height: 1.4; text-align: left; margin: 0; color: white;">
                  Tecnologia inteligente de cocção multifuncional (cozinha, grelha, frita e ferve sob pressão) com velocidade até 4x superior, otimizando o tempo operacional e reduzindo desperdícios.
                </p>
              </div>
            </div>
          </div>

          <!-- Cafeteiras Bunn -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="padding: 0; position: relative; border-color: var(--color-orange); overflow: hidden;">
                <!-- Imagem se houver -->
                <img src="./assets/equip_cafeteiras_bunn.jpg" alt="Cafeteiras Bunn" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <!-- Fallback Icon if Image Missing -->
                <div style="display: none; width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; background-color: var(--color-orange-light); border-radius: 16px; padding: 16px;">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
                </div>
                <!-- Overlay Title -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)); padding: 12px; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; text-align: left;">
                  <h4 style="color: white; font-size: 14px; font-family: var(--font-title); font-weight: 700; margin: 0;">Cafeteiras Bunn</h4>
                  <div style="font-size: 10px; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 3px; margin-top: 2px;">Toque <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                </div>
              </div>
              <div class="flip-card-back" style="background-color: var(--color-orange); border-color: var(--color-orange); padding: 16px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left;">
                <h4 style="font-size: 14px; margin-bottom: 4px; color: white; width: 100%;">Cafeteiras Bunn</h4>
                <p style="font-size: 11.5px; line-height: 1.4; text-align: left; margin: 0; color: white;">
                  Equipamentos profissionais de alto rendimento que garantem extração precisa, temperatura uniforme e agilidade na distribuição do café em grande escala, mantendo o sabor original.
                </p>
              </div>
            </div>
          </div>

          <!-- Processador de verduras -->
          <div class="flip-card" onclick="this.classList.toggle('flipped')">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="padding: 0; position: relative; border-color: var(--color-orange); overflow: hidden;">
                <!-- Imagem se houver -->
                <img src="./assets/equip_processador_folhas.jpg" alt="Processador de verduras" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <!-- Fallback Icon if Image Missing -->
                <div style="display: none; width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; background-color: var(--color-orange-light); border-radius: 16px; padding: 16px;">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/><path d="M12 12l5 5"/><path d="M12 12l-5-5"/></svg>
                </div>
                <!-- Overlay Title -->
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)); padding: 12px; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; text-align: left;">
                  <h4 style="color: white; font-size: 14px; font-family: var(--font-title); font-weight: 700; margin: 0;">Processador</h4>
                  <div style="font-size: 10px; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 3px; margin-top: 2px;">Toque <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                </div>
              </div>
              <div class="flip-card-back" style="background-color: var(--color-orange); border-color: var(--color-orange); padding: 16px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left;">
                <h4 style="font-size: 14px; margin-bottom: 4px; color: white; width: 100%;">Processador de Verduras</h4>
                <p style="font-size: 11.5px; line-height: 1.4; text-align: left; margin: 0; color: white;">
                  Processador industrial que higieniza e fatia legumes e folhas com corte preciso e uniforme, minimizando a manipulação direta do alimento e garantindo máxima segurança alimentar.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    `
  },
  "buffet": {
    titulo: "Restaurante & Buffet",
    cor: "var(--color-green-hover)",
    texto: `
      <!-- Imagem de cabeçalho -->
      <img src="./assets/img_buffet_main.jpg" alt="Restaurante & Buffet alimentaSesi" class="panel-img" onerror="this.style.display='none';" />

      <p style="font-size: 18px; line-height: 1.6; color: var(--text-secondary); margin-bottom: 24px;">
        A alimentaSesi atua focada na flexibilidade do atendimento, contemplando empresas de diferentes perfis e trabalhadores com paladares variados. Somos parceiros da indústria em soluções de alimentação que motivam e engajam trabalhadores.
      </p>

      <!-- Imagens de detalhe lado a lado -->
      <div class="images-row">
        <img src="./assets/img_buffet_detail_01.jpg" alt="Detalhe Buffet 1" class="panel-img" onerror="this.style.display='none';" />
        <img src="./assets/img_buffet_detail_02.jpg" alt="Detalhe Buffet 2" class="panel-img" onerror="this.style.display='none';" />
      </div>

      <h3 style="font-family: var(--font-title); font-size: 20px; font-weight: 800; color: var(--color-green-hover); margin-bottom: 18px;">O que fazemos:</h3>

      <div class="accordion-container">
        <!-- Item 1: Buffet -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/buffet.svg" alt="Buffet" class="accordion-icon" />
              <span class="accordion-title">Buffet</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Conta com cardápio variado, servindo comida caseira preparada com cuidado para adicionar mais saúde e sabor ao dia a dia dos trabalhadores.
            </div>
          </div>
        </div>

        <!-- Item 2: Buffet Gourmet -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/buffet-gourmet.svg" alt="Buffet Gourmet" class="accordion-icon" />
              <span class="accordion-title">Buffet Gourmet</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Um lugar reservado à mesa da alta gastronomia. Repleto de pratos sofisticados e ingredientes primes, é um banquete para quem aprecia a arte da cozinha contemporânea.
            </div>
          </div>
        </div>

        <!-- Item 3: Sabor & Cor -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/sabor&cor.svg" alt="Sabor & Cor" class="accordion-icon" />
              <span class="accordion-title">Sabor & Cor</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Serviço composto de refeições leves e equilibradas, é ideal para quem quer saborear pratos saudáveis e deliciosos num menu planejado por nossos nutricionistas.
            </div>
          </div>
        </div>

        <!-- Item 4: Sabor & Arte -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/sabor&arte.svg" alt="Sabor & Arte" class="accordion-icon" />
              <span class="accordion-title">Sabor & Arte</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Serviço sofisticado, que oferece aos trabalhadores pratos com classe e requinte, proporcionando uma viagem pelo mundo da gastronomia.
            </div>
          </div>
        </div>

        <!-- Item 5: Transportada -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/transportada.svg" alt="Transportada" class="accordion-icon" />
              <span class="accordion-title">Transportada</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              As refeições são produzidas em nossas cozinhas e levadas às empresas em containers isotérmicos para preservar a qualidade do alimento. O serviço também inclui visitas periódicas de um nutricionista aos restaurantes para garantir a qualidade e a satisfação dos clientes.
            </div>
          </div>
        </div>

        <!-- Item 6: Cafeteria -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/cafeteria.svg" alt="Cafeteria" class="accordion-icon" />
              <span class="accordion-title">Cafeteria</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Espaço moderno, com ambiente aconchegante, onde o trabalhador encontra uma ampla variedade de doces, salgados e bebidas. Complementa a alimentação do trabalhador proporcionando, com conforto e conveniência, um momento de pausa para o café e para renovar as energias.
            </div>
          </div>
        </div>

        <!-- Item 7: Buffet escola -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/buffet-escola.svg" alt="Buffet escola" class="accordion-icon" />
              <span class="accordion-title">Buffet escola</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Fornece refeições diárias, garantindo a qualidade, higiene e os valores nutricionais adequados aos alunos. Nossa equipe de nutricionistas promove a autonomia e as escolhas alimentares conscientes entre os estudantes.
            </div>
          </div>
        </div>

        <!-- Item 8: Cantinas -->
        <div class="accordion-item">
          <div class="accordion-header" role="button" tabindex="0">
            <div class="accordion-header-left">
              <img src="./assets/cantinas.svg" alt="Cantinas" class="accordion-icon" />
              <span class="accordion-title">Cantinas</span>
            </div>
            <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="accordion-content">
            <div class="accordion-text">
              Atendem escolas, levando aos alunos, funcionários e demais públicos do ambiente toda a qualidade de nossos serviços.
            </div>
          </div>
        </div>
      </div>
    `
  }
};

/**
 * Inicialização principal do sistema do Totem
 */
function init() {
  console.log("Totem alimentaSesi inicializado com sucesso.");
  
  // Realiza o primeiro cálculo de escala da tela de 1080x1920
  adjustTotemScale();
  
  // Associa os eventos de toque e clique aos elementos
  bindEvents();
  
  // Configura animações adicionais ou estados iniciais, se necessário
  animateHotspots();
}

/**
 * Ajusta a escala da tela de 1080x1920 baseada na janela de exibição
 * Garante que a visualização de desenvolvimento e o iframe do AI Studio
 * fiquem perfeitos sem barra de rolagem e sem quebrar a resolução nativa.
 */
function adjustTotemScale() {
  const wrapper = document.getElementById("totem-wrapper");
  const screen = document.getElementById("totem-screen");
  
  if (!wrapper || !screen) return;
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Calcula o fator de escala ideal (mantendo o aspecto de 1080x1920)
  const scaleX = windowWidth / 1080;
  const scaleY = windowHeight / 1920;
  
  // Utiliza a menor escala para garantir que o totem caiba inteiramente na tela do preview
  const scale = Math.min(scaleX, scaleY);
  
  // Aplica a escala e mantém o totem centralizado
  screen.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

/**
 * Associa todos os ouvintes de eventos da interface
 */
function bindEvents() {
  // Evento de redimensionamento da janela de preview para auto-escala
  window.addEventListener("resize", adjustTotemScale);
  
  // Ouvintes para o Hotspot Especial do Topo (Marca / Impacto em Números)
  const badgeImpacto = document.getElementById("badge-impacto");
  if (badgeImpacto) {
    badgeImpacto.addEventListener("click", () => openPanel("impacto"));
  }

  // Ouvintes para os Hotspots do Cenário
  const hotspotsConfig = [
    { buttonId: "btn-hotspot-educacao", triggerClass: "#hotspot-educacao .hotspot-trigger", themeKey: "educacao" },
    { buttonId: "btn-hotspot-equipe", triggerClass: "#hotspot-equipe .hotspot-trigger", themeKey: "equipe" },
    { buttonId: "btn-hotspot-buffet", triggerClass: "#hotspot-buffet .hotspot-trigger", themeKey: "buffet" },
    { buttonId: "btn-hotspot-cozinha", triggerClass: "#hotspot-cozinha .hotspot-trigger", themeKey: "cozinha" }
  ];

  hotspotsConfig.forEach(config => {
    // Escuta tanto o botão de texto quanto o círculo de disparo para uma excelente usabilidade em touch
    const labelBtn = document.getElementById(config.buttonId);
    const triggerCircle = document.querySelector(config.triggerClass);

    if (labelBtn) {
      labelBtn.addEventListener("click", () => openPanel(config.themeKey));
    }
    if (triggerCircle) {
      triggerCircle.addEventListener("click", () => openPanel(config.themeKey));
    }
  });

  // Ouvinte para fechar o painel lateral (Botão Fechar X)
  const closeBtn = document.getElementById("panel-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePanel);
  }

  // Ouvinte para fechar o painel ao clicar no backdrop escuro de fundo
  const backdrop = document.getElementById("backdrop-overlay");
  if (backdrop) {
    backdrop.addEventListener("click", closePanel);
  }

  // Tratamento delegado para Cliques em Accordions (Dinâmicos)
  const panelBody = document.getElementById("panel-body");
  if (panelBody) {
    panelBody.addEventListener("click", (e) => {
      const header = e.target.closest(".accordion-header");
      if (!header) return;
      
      const item = header.closest(".accordion-item");
      if (!item) return;
      
      const isActive = item.classList.contains("active");
      
      // Fecha outros itens de accordion na mesma lista para efeito sanfona limpo
      const container = item.closest(".accordion-container");
      if (container) {
        const activeItems = container.querySelectorAll(".accordion-item.active");
        activeItems.forEach(activeItem => {
          if (activeItem !== item) {
            activeItem.classList.remove("active");
            const content = activeItem.querySelector(".accordion-content");
            if (content) {
              content.style.maxHeight = null;
            }
          }
        });
      }
      
      // Alterna o estado do item atual
      if (!isActive) {
        item.classList.add("active");
        const content = item.querySelector(".accordion-content");
        if (content) {
          // Define a altura máxima baseada no tamanho real do elemento interno
          content.style.maxHeight = content.scrollHeight + "px";
        }
      } else {
        item.classList.remove("active");
        const content = item.querySelector(".accordion-content");
        if (content) {
          content.style.maxHeight = null;
        }
      }
    });
  }
}

/**
 * Abre o painel lateral deslizante com base no ID do tema selecionado
 * @param {string} id - Identificador do tema
 */
function openPanel(id) {
  const panel = document.getElementById("side-panel");
  const backdrop = document.getElementById("backdrop-overlay");
  const panelTitle = document.getElementById("panel-title");
  const panelBody = document.getElementById("panel-body");
  
  if (!panel || !backdrop || !panelTitle || !panelBody) return;
  
  const dadosTema = TEMAS_PLACEHOLDER[id];
  if (!dadosTema) return;
  
  // Atualiza dinamicamente o título e a estrutura do conteúdo pré-preparada
  panelTitle.innerText = dadosTema.titulo;
  panelTitle.style.color = dadosTema.cor;
  panelBody.innerHTML = dadosTema.texto;
  
  // Ativa as classes CSS que disparam as transições suaves
  panel.classList.add("open");
  backdrop.classList.add("active");
  
  console.log(`Painel do tema "${dadosTema.titulo}" aberto.`);
}

/**
 * Fecha o painel lateral deslizante retornando ao cenário principal
 */
function closePanel() {
  const panel = document.getElementById("side-panel");
  const backdrop = document.getElementById("backdrop-overlay");
  
  if (!panel || !backdrop) return;
  
  // Remove as classes de exibição ativando a animação reversa
  panel.classList.remove("open");
  backdrop.classList.remove("active");
  
  console.log("Painel lateral fechado.");
}

/**
 * Controla e adiciona micro-interações discretas adicionais aos hotspots,
 * simulando efeitos tácteis nativos avançados para totens touchscreen.
 */
function animateHotspots() {
  const hotspots = document.querySelectorAll(".hotspot");
  hotspots.forEach(hotspot => {
    // Efeito pressed premium ao toque (active)
    hotspot.addEventListener("touchstart", () => {
      hotspot.style.transform = "translate(-20px, -20px) scale(0.95)";
    });
    
    hotspot.addEventListener("touchend", () => {
      hotspot.style.transform = "";
    });
  });
}

// Inicializa a aplicação assim que o DOM estiver carregado
document.addEventListener("DOMContentLoaded", init);
