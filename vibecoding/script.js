// ===================== DADOS =====================

const LINK_SPOTIFY = "https://open.spotify.com/artist/5D56dZmhE9DgT01XixdHiD";

// Agenda copiada de lagum.com.br. Shows com data passada somem sozinhos.
// "turne: true" marca as datas da turnê Lagum em Todo Lugar (as faixas terra do site oficial).
const SHOWS = [
	{ data: "2026-10-11", cidade: "Vitória", uf: "ES", local: "Espaço Patrick Ribeiro", ingresso: "https://q2ingressos.com.br/events/aero-sunset-maneva-lagum" },
	{ data: "2026-10-17", turne: true, cidade: "Belo Horizonte", uf: "MG", local: "Arena Hall", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-belo-horizonte" },
	{ data: "2026-10-23", cidade: "Bauru", uf: "SP", local: "Garden Eventos", ingresso: "https://www.icones.com.br/evento/261177-lagum-chico-chico-tour-2026" },
	{ data: "2026-10-24", cidade: "Piracicaba", uf: "SP", local: "Club Cristóvão Colombo", ingresso: "https://www.icones.com.br/evento/264631-lagum-chico-chico-tour-2026" },
	{ data: "2026-11-07", turne: true, cidade: "Rio de Janeiro", uf: "RJ", local: "Qualistage", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-rio-de-janeiro" },
	{ data: "2026-11-13", cidade: "São José do Rio Preto", uf: "SP", local: "Villa Império", ingresso: "https://www.icones.com.br/evento/946615-lagum-chico-chico-tour-2026" },
	{ data: "2026-11-14", cidade: "São Carlos", uf: "SP", local: "Oásis Eventos", ingresso: "https://www.icones.com.br/evento/139899-lagum-chico-chico-tour-2026" },
	{ data: "2026-11-15", cidade: "São José dos Campos", uf: "SP", local: "Palácio Sunset", ingresso: "https://articket.com.br/e/6448/lagum-em-sao-jose-dos-campos" },
	{ data: "2026-11-20", cidade: "Atibaia", uf: "SP", local: "Vila Di Praia", ingresso: "https://ingressos10.com.br/link/viladipraialagum" },
	{ data: "2026-11-21", cidade: "Suzano", uf: "SP", local: "Clube Suzaninho", ingresso: null },
	{ data: "2026-11-28", turne: true, cidade: "Brasília", uf: "DF", local: "Centro de Convenções Ulysses Guimarães", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-brasilia" },
	{ data: "2026-12-05", turne: true, cidade: "Ribeirão Preto", uf: "SP", local: "Multiplan Hall", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-ribeirao-preto" },
	{ data: "2026-12-11", turne: true, cidade: "Porto Alegre", uf: "RS", local: "Auditório Araújo Vianna", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-porto-alegre" },
	{ data: "2026-12-12", turne: true, cidade: "Florianópolis", uf: "SC", local: "P12 Jurerê", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-florianopolis" },
	{ data: "2026-12-13", turne: true, cidade: "Curitiba", uf: "PR", local: "Cine Lido", ingresso: "https://www.ticketmaster.com.br/event/venda-geral-lagum-curitiba" },
	{ data: "2026-12-19", cidade: "Pará de Minas", uf: "MG", local: "Girus", ingresso: null },
	{ data: "2026-12-26", cidade: "Leopoldina", uf: "MG", local: "Stone House", ingresso: "https://www.ticket360.com.br/evento/34123/ingressos-para-lagum" },
];

// Prévias de 30s da API pública do iTunes (links estáveis). "link" abre a faixa completa no Spotify;
// sem ele, o player leva ao perfil da banda no Spotify.
const MUSICAS = [
	{ id: "deixa", titulo: "Deixa", detalhe: "com Ana Gabriela", ano: 2018, capa: "img/musicas/deixa.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/33/7b/91/337b912c-2c4f-eafa-f501-0ad1787d2f35/mzaf_12516963746352509984.plus.aac.p.m4a" },
	{ id: "oi", titulo: "Oi", detalhe: "Coisas da Geração", ano: 2019, capa: "img/musicas/oi.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/01/6b/e7/016be7da-be96-51d7-9230-317e54120357/mzaf_4494179231403113981.plus.aac.p.m4a" },
	{ id: "ninguem-me-ensinou", titulo: "Ninguém Me Ensinou", detalhe: "MEMÓRIAS (de onde eu nunca fui)", ano: 2020, capa: "img/musicas/ninguem-me-ensinou.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/9f/29/919f2901-e999-445f-569e-9d620a08f716/mzaf_9824335341448732370.plus.aac.p.m4a" },
	{ id: "sera", titulo: "Será", detalhe: "com IZA", ano: 2020, capa: "img/musicas/sera.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/77/92/a77792c5-1537-d453-6619-00a3b0848bf1/mzaf_17047434355019504064.plus.aac.p.m4a" },
	{ id: "a-cidade", link: "https://open.spotify.com/track/6chCkT8RkDC0kM66HKfPQb", titulo: "A Cidade", detalhe: "As Cores, as Curvas e as Dores do Mundo", ano: 2025, capa: "img/musicas/a-cidade.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/44/59/2e4459ae-7f87-0048-a6b9-12437f308a9e/mzaf_364690482410488764.plus.aac.p.m4a" },
	{ id: "musa-do-inverno", titulo: "Musa do Inverno", detalhe: "MEMÓRIAS (de onde eu nunca fui)", ano: 2021, capa: "img/musicas/musa-do-inverno.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b2/d9/a6/b2d9a631-928a-1f52-82bc-b3b03a2711f4/mzaf_15372758736182275361.plus.aac.p.m4a" },
	{ id: "caixa-postal", titulo: "Caixa Postal", detalhe: "com ANAVITORIA", ano: 2022, capa: "img/musicas/caixa-postal.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/19/07/d21907eb-3a30-a319-2ea3-b397c97c7f71/mzaf_8470729062173381172.plus.aac.p.m4a" },
	{ id: "bem-melhor", titulo: "Bem Melhor", detalhe: "Single", ano: 2018, capa: "img/musicas/bem-melhor.jpg", preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/46/88/a6/4688a671-2723-2686-38f4-03e6dbf2c3c2/mzaf_1262223493811557447.plus.aac.p.m4a" },
];

// As Cores, as Curvas e as Dores do Mundo (27/05/2025), na ordem do disco. Prévias do iTunes, faixas completas no Spotify.
const CAPA_ALBUM = "img/album-capa.jpg";
const faixaDoAlbum = (id, titulo, duracao, preview, faixaSpotify, detalhe = "") => ({
	id,
	titulo,
	detalhe,
	duracao,
	ano: 2025,
	capa: CAPA_ALBUM,
	preview: `https://audio-ssl.itunes.apple.com/itunes-assets/${preview}.plus.aac.p.m4a`,
	link: `https://open.spotify.com/track/${faixaSpotify}`,
});
const ALBUM = [
	faixaDoAlbum("eterno-agora", "Eterno Agora", 158, "AudioPreview221/v4/93/86/c2/9386c23e-de21-4a82-e604-59d6eabba2da/mzaf_17372400231070110752", "07qyP444w0MK4aGurc4b8O"),
	faixaDoAlbum("dancando-no-escuro", "Dançando no Escuro", 143, "AudioPreview211/v4/82/7d/7a/827d7a3c-c0de-b42f-05b5-4a59260b01f7/mzaf_16124442937591090455", "6ph0SJZFKS9SvzhlH5EZux"),
	faixaDoAlbum("a-cidade", "A Cidade", 163, "AudioPreview211/v4/2e/44/59/2e4459ae-7f87-0048-a6b9-12437f308a9e/mzaf_364690482410488764", "6chCkT8RkDC0kM66HKfPQb"),
	faixaDoAlbum("quem-desligou-o-som", "Quem Desligou o Som?", 184, "AudioPreview221/v4/00/a8/85/00a885a2-ae3c-7547-eb9d-da74c72d649e/mzaf_16016278723857806638", "4e9wvE79ruHVOUroP0HLrY"),
	faixaDoAlbum("as-desvantagens", "As Desvantagens de Amar Alguém Que Mora Longe", 188, "AudioPreview221/v4/38/3e/1b/383e1b50-ea04-456e-cc81-55c12566e4c2/mzaf_8807504924802770551", "22dg08ZH3AWZGN1f059yy5"),
	faixaDoAlbum("to-de-olho", "Tô de Olho", 142, "AudioPreview221/v4/0f/aa/88/0faa88d7-bf2a-f241-9103-f30d7b729893/mzaf_2658756362409959492", "0JDZ4A8NlRKaNTUeI1D4C7", "com Céu"),
	faixaDoAlbum("vagarosa-manha", "Vagarosa Manhã", 130, "AudioPreview221/v4/96/75/35/96753596-39ff-2580-83f5-f9b976082407/mzaf_12365657612789234781", "6QoNv7v5G552TvRzVjlhRM"),
	faixaDoAlbum("vida-novela", "Vida Novela", 158, "AudioPreview221/v4/09/04/00/090400b8-655d-dc2c-cb33-b244d1afea26/mzaf_14844628124484855989", "53bIEaF7X1ZfCr9jD062R2"),
	faixaDoAlbum("baby-blue", "Baby Blue", 216, "AudioPreview211/v4/0f/60/0a/0f600ac7-cc14-c5ae-7967-cbe40a1c327f/mzaf_13201768863514197506", "66LvT6RFcXDlffwSnAJH4z"),
	faixaDoAlbum("a-ultima-nuvem-do-ceu", "A Última Nuvem do Céu", 201, "AudioPreview211/v4/e4/68/08/e46808ae-b240-2693-5c47-70ea89f3c14f/mzaf_16475676151879649275", "6trtucjZDqjdwI2uuVj9wM"),
];

// Destaques da loja em lojalagum.com.br, na ordem da vitrine. "de" é o preço antigo, quando há promoção.
const LOJA = "https://www.lojalagum.com.br/produtos";
const PRODUTOS = [
	{ nome: "Camiseta Bom Demais", detalhe: "Branca, oversized", preco: 129.9, img: "img/loja/camiseta-bom-demais.jpg", alt: "Camiseta branca Bom Demais, com estampa oval de uma ilha com vulcão no peito", url: `${LOJA}/camiseta-bom-demais/` },
	{ nome: "Camiseta Lagum em Todo Lugar", detalhe: "Verde, oversized", preco: 129.9, img: "img/loja/camiseta-em-todo-lugar.jpg", alt: "Camiseta verde da turnê Lagum em Todo Lugar, com o logo Lagum em branco no peito", url: `${LOJA}/camiseta-lagum-em-todo-lugar/` },
	{ nome: "Boné Patos", preco: 109.9, img: "img/loja/bone-patos.jpg", alt: "Boné creme de aba verde com cordão e três patos bordados na frente", url: `${LOJA}/bone-patos/` },
	{ nome: "Garrafa térmica Lagum", detalhe: "1 litro", preco: 99.9, img: "img/loja/garrafa-termica.jpg", alt: "Duas garrafas térmicas verdes com o logo Lagum gravado", url: `${LOJA}/garrafa-termica-lagum/` },
	{ nome: "Anel de prata Ilha", detalhe: "“Seja o que eu quiser”, sob encomenda", preco: 499.9, img: "img/loja/anel-ilha.jpg", alt: "Anel de prata com a frase Seja o que eu quiser gravada por dentro, sobre uma mesa de madeira", url: `${LOJA}/anel-seja-o-que-eu-quiser/` },
	{ nome: "CD As Cores, as Curvas e as Dores do Mundo", preco: 59.9, img: "img/loja/cd-as-cores.jpg", alt: "CD do álbum As Cores, as Curvas e as Dores do Mundo na caixa transparente, com a foto aérea da banda no Edifício Niemeyer", url: `${LOJA}/cd-as-cores-as-curvas-e-as-dores-do-mundo/` },
	{ nome: "Chaveiro Gaita", preco: 29.9, img: "img/loja/chaveiro-gaita.jpg", alt: "Chaveiro em forma de gaita prateada com o logo Lagum, sobre uma mesa de madeira", url: `${LOJA}/chaveiro-gaita/` },
	{ nome: "Chaveiro A Ilha", preco: 19.9, img: "img/loja/chaveiro-ilha.jpg", alt: "Chaveiro A Ilha preso no bolso de uma calça jeans", url: `${LOJA}/chaveiro-a-ilha/` },
	{ nome: "Camiseta As Cores, as Curvas e as Dores do Mundo", detalhe: "Cinza, boxy", preco: 129.9, img: "img/loja/camiseta-as-cores.jpg", alt: "Camiseta cinza estonada com a sombra dos quatro integrantes e a palavra Lagum na frente", url: `${LOJA}/cinza-boxy/` },
	{ nome: "Camiseta Lagum Company", detalhe: "Off white, boxy", preco: 129.9, img: "img/loja/camiseta-company.jpg", alt: "Costas da camiseta off white Lagum Company, com ilustração da banda e texto em azul", url: `${LOJA}/camiseta-lagum-company-boxy/` },
	{ nome: "Camiseta Habite-se", detalhe: "Preta, boxy", preco: 129.9, img: "img/loja/camiseta-habite-se.jpg", alt: "Costas da camiseta preta Habite-se, com o desenho de uma casa em chamas e a frase Alimente-se de si", url: `${LOJA}/camiseta-habite-se-preta-boxy/` },
	{ nome: "Camiseta Seje Maneiro", detalhe: "Branca, boxy", preco: 129.9, img: "img/loja/camiseta-seje-maneiro.jpg", alt: "Camiseta branca com a frase Seje maneiro e uma flor desenhadas à mão no peito", url: `${LOJA}/camiseta-seje-maneiro-boxy/` },
];

// ===================== UTILITÁRIOS =====================

const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
const $$ = (seletor, raiz = document) => [...raiz.querySelectorAll(seletor)];

const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const DIAS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
const reais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

// Datas tratadas como dia do calendário (sem fuso), para não pular de dia fora do Brasil.
function partesData(iso) {
	const [ano, mes, dia] = iso.split("-").map(Number);
	const semana = DIAS[new Date(Date.UTC(ano, mes - 1, dia)).getUTCDay()];
	return { ano, mes: mes - 1, dia, semana };
}

function hojeISO() {
	const h = new Date();
	return `${h.getFullYear()}-${String(h.getMonth() + 1).padStart(2, "0")}-${String(h.getDate()).padStart(2, "0")}`;
}

function diasAte(iso) {
	const { ano, mes, dia } = partesData(iso);
	const h = new Date();
	return Math.round((Date.UTC(ano, mes, dia) - Date.UTC(h.getFullYear(), h.getMonth(), h.getDate())) / 86400000);
}

function formatarTempo(segundos) {
	const s = Math.max(0, Math.floor(segundos || 0));
	return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

const showsFuturos = () => {
	const hoje = hojeISO();
	return SHOWS.filter((s) => s.data >= hoje).sort((a, b) => a.data.localeCompare(b.data));
};

let lenis = null;
let animacoesAtivas = false;

// ===================== AGENDA =====================

// Filtro por região: com poucas datas por estado, um chip por UF virava uma fileira de "1".
const REGIOES = {
	Norte: ["AC", "AM", "AP", "PA", "RO", "RR", "TO"],
	Nordeste: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
	"Centro-Oeste": ["DF", "GO", "MS", "MT"],
	Sudeste: ["ES", "MG", "RJ", "SP"],
	Sul: ["PR", "RS", "SC"],
};
const regiaoDe = (uf) => Object.keys(REGIOES).find((r) => REGIOES[r].includes(uf)) || "Outras";

// Mostra as próximas datas primeiro; o resto aparece no botão "Ver mais".
const LIMITE_SHOWS = 6;

const agenda = { filtro: "todos", expandida: false, lotes: [] };

function renderAgenda() {
	const futuros = showsFuturos();
	const lista = $("#agenda-lista");
	const filtros = $("#agenda-filtros");
	const resumo = $("#agenda-resumo");

	const mais = $("#agenda-mais");

	$("#agenda-vazia").hidden = futuros.length > 0;
	if (!futuros.length) {
		filtros.hidden = mais.hidden = true;
		lista.innerHTML = "";
		resumo.textContent = "Novas datas em breve.";
		return;
	}

	const contagem = {};
	futuros.forEach((s) => {
		const r = regiaoDe(s.uf);
		contagem[r] = (contagem[r] || 0) + 1;
	});
	const regioes = Object.keys(contagem).sort((a, b) => contagem[b] - contagem[a] || a.localeCompare(b));
	const naTurne = futuros.filter((s) => s.turne).length;
	if (agenda.filtro === "turne" ? !naTurne : agenda.filtro !== "todos" && !contagem[agenda.filtro]) agenda.filtro = "todos";

	// Com uma região só e sem datas da turnê, o filtro não ajuda em nada
	filtros.hidden = regioes.length < 2 && !naTurne;
	const opcoes = [["todos", "Todos", futuros.length], ...(naTurne ? [["turne", "Em todo lugar", naTurne]] : []), ...regioes.map((r) => [r, r, contagem[r]])];
	filtros.innerHTML = opcoes
		.map(([valor, rotulo, n]) => `<button type="button" class="chip${valor === "turne" ? " chip-turne" : ""}" data-regiao="${valor}" aria-pressed="${agenda.filtro === valor}">${rotulo}<span class="chip-n">${n}</span></button>`)
		.join("");

	const mesInicio = MESES[partesData(futuros[0].data).mes];
	const mesFim = MESES[partesData(futuros[futuros.length - 1].data).mes];
	const periodo = mesInicio === mesFim ? `em ${mesInicio}` : `de ${mesInicio} a ${mesFim}`;
	const daTurne = naTurne ? `, ${naTurne} da turnê Lagum em Todo Lugar` : "";
	resumo.textContent = `${futuros.length} ${futuros.length === 1 ? "data" : "datas"} ${periodo}${daTurne}. Ingressos pelos links oficiais.`;

	const visiveis =
		agenda.filtro === "todos" ? futuros : agenda.filtro === "turne" ? futuros.filter((s) => s.turne) : futuros.filter((s) => regiaoDe(s.uf) === agenda.filtro);
	const limite = agenda.expandida ? Infinity : LIMITE_SHOWS;
	const oculto = (s) => visiveis.indexOf(s) >= limite;
	const grupos = [];
	visiveis.forEach((s) => {
		const { mes, ano } = partesData(s.data);
		let grupo = grupos.find((g) => g.mes === mes && g.ano === ano);
		if (!grupo) grupos.push((grupo = { mes, ano, shows: [] }));
		grupo.shows.push(s);
	});

	lista.innerHTML = grupos
		.map(
			(g) => `
		<div class="agenda-mes grid gap-2 border-t border-linha pt-8 pb-8 lg:grid-cols-12 lg:gap-8" ${oculto(g.shows[0]) ? "hidden" : ""}>
			<div class="lg:col-span-3">
				<div class="lg:sticky lg:top-28">
					<h3 class="font-display text-4xl font-bold tracking-[-0.03em] capitalize md:text-5xl" style="font-stretch: 82%">${MESES[g.mes]}</h3>
					<p class="mt-1 font-mono text-sm text-grafite">${g.shows.length} ${g.shows.length === 1 ? "show" : "shows"}</p>
				</div>
			</div>
			<ol class="lg:col-span-9">${g.shows.map((s) => itemShow(s, s === futuros[0], oculto(s))).join("")}</ol>
		</div>`
		)
		.join("");

	const restantes = visiveis.length - LIMITE_SHOWS;
	mais.hidden = agenda.expandida || restantes <= 0;
	mais.textContent = `Ver mais ${restantes} ${restantes === 1 ? "data" : "datas"}`;
}

function itemShow(s, proximo, oculto) {
	const { dia, mes, semana } = partesData(s.data);
	const rotuloData = `${dia} de ${MESES[mes]}`;

	// Datas da turnê: faixa terra (.is-turne), cidade em limão e o nome da turnê escrito, para não depender só da cor
	const t = s.turne;
	const apagado = t ? "text-papel/65" : "text-grafite";

	let selo = "";
	if (proximo) {
		const n = diasAte(s.data);
		const quando = n === 0 ? "hoje" : n === 1 ? "amanhã" : `em ${n} dias`;
		selo = `<p class="mb-2 inline-flex rounded-full px-3 py-1 font-mono text-xs font-medium ${t ? "bg-limao text-tinta" : "bg-ferrugem/10 text-ferrugem"}">Próximo show, ${quando}</p>`;
	}

	const acao = s.ingresso
		? `<a class="btn-ingresso" href="${s.ingresso}" target="_blank" rel="noopener" aria-label="Ingressos para ${s.cidade}, ${rotuloData}${t ? ", turnê Lagum em Todo Lugar" : ""} (abre em nova aba)">Ingressos <i class="bx bx-arrow-up-right text-lg" aria-hidden="true"></i></a>`
		: `<span class="btn-ingresso is-breve">Em breve</span>`;

	return `
		<li class="show${t ? " is-turne" : ""} relative isolate grid grid-cols-[4.25rem_1fr] items-center gap-x-5 gap-y-4 border-b border-linha py-6 last:border-b-0 sm:grid-cols-[5.5rem_1fr_auto] md:py-7" ${oculto ? "hidden" : ""}>
			<p class="leading-none">
				<span class="block font-display text-5xl font-bold tracking-[-0.04em] md:text-6xl" style="font-stretch: 82%">${String(dia).padStart(2, "0")}</span>
				<span class="mt-1.5 block font-mono text-xs ${apagado}">${semana}</span>
			</p>
			<div class="show-cidade min-w-0">
				${selo}
				${t ? `<p class="mb-1 font-mono text-xs text-limao"><span aria-hidden="true">/</span>turnê em todo lugar</p>` : ""}
				<p class="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl ${t ? "text-limao" : ""}">${s.cidade}<span class="font-normal ${apagado}">/${s.uf}</span></p>
				<p class="mt-1 ${t ? "text-papel/80" : "text-grafite"}">${s.local}</p>
			</div>
			<div class="col-start-2 sm:col-start-auto">${acao}</div>
		</li>`;
}

function revelarShows() {
	agenda.lotes.forEach((st) => st.kill());
	agenda.lotes = [];
	if (!animacoesAtivas) return;

	const itens = $$("#agenda-lista .agenda-mes h3, #agenda-lista .show");
	// Só opacity (nunca visibility): um item esperando a animação continua alcançável pelo Tab
	gsap.set(itens, { opacity: 0, y: 36 });
	const entrar = (lote) => gsap.to(lote, { opacity: 1, y: 0, stagger: 0.07, duration: 0.9, ease: "expo.out", overwrite: true });
	agenda.lotes = ScrollTrigger.batch(itens, { start: "top 94%", once: true, onEnter: entrar, onEnterBack: entrar });
}

$("#agenda-filtros").addEventListener("click", (e) => {
	const chip = e.target.closest("[data-regiao]");
	if (!chip) return;
	agenda.filtro = chip.dataset.regiao;
	renderAgenda();
	$(`#agenda-filtros [data-regiao="${agenda.filtro}"]`)?.focus();
	if (animacoesAtivas) {
		revelarShows();
		requestAnimationFrame(() => ScrollTrigger.refresh());
	}
});

$("#agenda-mais").addEventListener("click", () => {
	agenda.expandida = true;
	const novos = $$("#agenda-lista [hidden]");
	novos.forEach((el) => (el.hidden = false));
	$("#agenda-mais").hidden = true;

	// O foco vai para a primeira data nova, para o teclado não voltar ao topo da página
	const primeiro = novos.find((el) => el.matches(".show"));
	if (primeiro) {
		primeiro.tabIndex = -1;
		primeiro.focus();
	}

	if (animacoesAtivas) {
		const itens = novos.flatMap((el) => (el.matches(".show") ? [el] : $$("h3", el)));
		gsap.fromTo(itens, { opacity: 0, y: 36 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.9, ease: "expo.out", overwrite: true });
		requestAnimationFrame(() => ScrollTrigger.refresh());
	}
});

// "Datas da turnê" no hero já abre a agenda filtrada pela turnê
$$("[data-filtrar-turne]").forEach((link) =>
	link.addEventListener("click", () => {
		if (!showsFuturos().some((s) => s.turne)) return;
		agenda.filtro = "turne";
		renderAgenda();
		if (animacoesAtivas) {
			revelarShows();
			requestAnimationFrame(() => ScrollTrigger.refresh());
		}
	})
);

// Próxima data da turnê, embaixo dos botões do hero
function renderHeroProxima() {
	const proxima = showsFuturos().find((s) => s.turne);
	const alvo = $("#hero-proxima");
	if (!proxima) return;
	const { dia, mes } = partesData(proxima.data);
	alvo.innerHTML = `<span class="text-limao">Próxima parada:</span> ${proxima.cidade}, ${dia} de ${MESES[mes]}`;
	alvo.hidden = false;
}

// ===================== FAIXA DE CIDADES =====================

function renderFaixa() {
	const cidades = [...new Set(showsFuturos().map((s) => s.cidade))];
	const naTurne = new Set(showsFuturos().filter((s) => s.turne).map((s) => s.cidade));
	const nomes = cidades.length ? cidades : ["Lagum em todo lugar"];
	const bloco = nomes.map((c) => `<span${naTurne.has(c) ? ' class="text-limao"' : ""}>${c}</span><span class="text-papel/30">/</span>`).join("");
	$(".faixa-trilho").innerHTML = `<div class="flex shrink-0">${bloco}</div><div class="flex shrink-0">${bloco}</div>`;
}

// ===================== MÚSICAS + PLAYER =====================

function renderMusicas() {
	$("#musicas-lista").innerHTML = MUSICAS.map(
		(m, i) => `
		<li class="musica ${i % 2 ? "md:translate-y-16" : ""}" data-faixa="${m.id}">
			<button type="button" class="musica-botao block w-full text-left" data-tocar="${m.id}" data-lista="hits" aria-pressed="false" aria-label="Ouvir prévia de ${m.titulo}">
				<span class="musica-capa relative block aspect-square">
					<span class="vinil" aria-hidden="true"><span class="vinil-disco"><span class="vinil-rotulo" style="background-image: url('${m.capa}')"></span></span></span>
					<img src="${m.capa}" alt="" class="relative z-10 block aspect-square w-full rounded-[4px] object-cover shadow-[0_24px_48px_-28px_rgb(38_25_16/0.6)]" width="600" height="600" loading="lazy">
					<span class="faixa-icone musica-acao absolute bottom-3 left-3 z-20 inline-flex size-11 items-center justify-center rounded-full bg-papel text-2xl text-ferrugem shadow-[0_6px_20px_-6px_rgb(38_25_16/0.4)] transition duration-500 ease-saida"><i class="bx bx-play" aria-hidden="true"></i></span>
				</span>
				<span class="mt-5 flex items-center gap-2.5 font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">${m.titulo}<span class="eq text-ferrugem" aria-hidden="true"><i></i><i></i><i></i></span></span>
				<span class="mt-1 block text-sm text-grafite">${m.detalhe}, ${m.ano}</span>
			<span class="faixa-erro mt-1 text-sm font-medium text-ferrugem">Prévia indisponível</span>
			</button>
		</li>`
	).join("");
}


function renderDisco() {
	$("#disco-faixas").innerHTML = ALBUM.map(
		(f, i) => `
		<li class="faixa relative isolate border-b border-linha" data-faixa="${f.id}">
			<button type="button" class="faixa-botao relative grid w-full grid-cols-[2rem_1fr_auto] items-center gap-x-4 py-5 text-left md:grid-cols-[3rem_1fr_auto_auto] md:gap-x-6 md:py-6" data-tocar="${f.id}" data-lista="disco" aria-pressed="false" aria-label="Ouvir prévia de ${f.titulo}">
				<span class="font-mono text-sm text-grafite tabular-nums">${String(i + 1).padStart(2, "0")}</span>
				<span class="min-w-0">
					<span class="faixa-titulo flex items-center gap-2.5 font-display text-2xl leading-tight font-semibold tracking-[-0.02em] transition-colors md:text-3xl" style="font-stretch: 88%">${f.titulo}<span class="eq shrink-0 text-ferrugem" aria-hidden="true"><i></i><i></i><i></i></span></span>
					${f.detalhe ? `<span class="mt-1 block text-sm text-grafite">${f.detalhe}</span>` : ""}
					<span class="faixa-erro mt-1 text-sm font-medium text-ferrugem">Prévia indisponível</span>
				</span>
				<span class="hidden font-mono text-sm text-grafite tabular-nums md:inline">${formatarTempo(f.duracao)}</span>
				<span class="faixa-icone inline-flex size-11 items-center justify-center rounded-full border border-ferrugem text-2xl text-ferrugem transition duration-300 ease-saida"><i class="bx bx-play" aria-hidden="true"></i></span>
			</button>
		</li>`
	).join("");
}

// O player toca uma lista por vez (as mais ouvidas ou o disco): "próxima" segue a lista de onde a faixa veio.
const LISTAS = { hits: MUSICAS, disco: ALBUM };
const player = { lista: MUSICAS, indice: -1, audio: new Audio() };
const faixaAtual = () => player.lista[player.indice];
player.audio.preload = "none";

const ui = {
	raiz: $("#player"),
	vinil: $("#player .vinil"),
	rotulo: $("#player-rotulo"),
	titulo: $("#player-titulo"),
	status: $("#player-status"),
	tempo: $("#player-tempo"),
	progresso: $("#player-progresso"),
	play: $(".player-play"),
	link: $("#player-link"),
};

function abrirPlayer() {
	ui.raiz.inert = false;
	ui.raiz.classList.add("is-aberto");
	document.documentElement.classList.add("player-aberto");
}

function fecharPlayer() {
	player.audio.pause();
	ui.raiz.classList.remove("is-aberto");
	ui.raiz.inert = true;
	document.documentElement.classList.remove("player-aberto");
	marcarEstado(null);
}

function carregarMusica(lista, i) {
	const m = lista[i];
	player.lista = lista;
	player.indice = i;
	player.audio.src = m.preview;
	ui.rotulo.style.backgroundImage = `url('${m.capa}')`;
	ui.titulo.textContent = ui.titulo.title = m.titulo;
	ui.link.href = m.link || LINK_SPOTIFY;
	ui.progresso.value = 0;
	atualizarProgresso();
	abrirPlayer();
	tocar();
}

function tocar() {
	marcarEstado("carregando");
	player.audio.play().catch((erro) => {
		if (erro.name !== "AbortError") marcarEstado("erro");
	});
}

function alternarAtual() {
	abrirPlayer();
	player.audio.paused ? tocar() : player.audio.pause();
}

function alternarMusica(id, nomeLista) {
	const lista = LISTAS[nomeLista] || MUSICAS;
	const i = lista.findIndex((m) => m.id === id);
	if (i < 0) return;
	if (faixaAtual()?.id !== id) return carregarMusica(lista, i);
	// Mesma faixa (A Cidade está nas duas listas): só pausa ou retoma, seguindo a lista do clique
	player.lista = lista;
	player.indice = i;
	alternarAtual();
}

function marcarEstado(estado) {
	const atual = estado ? faixaAtual() : null;
	const tocando = estado === "tocando";

	ui.raiz.dataset.estado = estado || "pausado";
	ui.status.textContent = estado === "carregando" ? "Carregando" : estado === "erro" ? "Prévia indisponível" : "Prévia";
	ui.play.setAttribute("aria-label", tocando ? "Pausar" : "Tocar");
	$("i", ui.play).className = `bx ${estado === "carregando" ? "bx-loader-dots" : tocando ? "bx-pause" : "bx-play"}`;

	const icone = (ativo) => (!ativo ? "bx-play" : estado === "carregando" ? "bx-loader-dots" : estado === "erro" ? "bx-alert-circle" : tocando ? "bx-pause" : "bx-play");
	$$("[data-faixa]").forEach((el) => {
		const ativo = atual && el.dataset.faixa === atual.id;
		if (ativo) el.dataset.estado = estado;
		else delete el.dataset.estado;
		$(".faixa-icone i", el).className = `bx ${icone(ativo)}`;
	});

	$$("[data-tocar]").forEach((btn) => btn.setAttribute("aria-pressed", String(Boolean(atual && btn.dataset.tocar === atual.id && tocando))));

	// O botão do hero vira "pausar" quando a faixa dele está tocando
	const hero = $(".hero [data-tocar]");
	if (hero) {
		const heroAtivo = atual && hero.dataset.tocar === atual.id && tocando;
		const tituloHero = ALBUM.find((f) => f.id === hero.dataset.tocar).titulo;
		$("i", hero).className = `bx ${heroAtivo ? "bx-pause" : "bx-play"} text-xl`;
		$("span", hero).textContent = `${heroAtivo ? "Pausar" : "Ouvir"} “${tituloHero}”`;
	}

	// Vinis ligados à faixa atual: o do player, o do card e o do hero (quando é faixa do álbum novo)
	const card = atual && $(`.musica[data-faixa="${atual.id}"] .vinil`);
	const discoHero = atual && atual.ano === 2025 && $(".hero .vinil");
	vinil.ligados = atual ? [ui.vinil, card, discoHero].filter(Boolean) : [];
	tocando ? iniciarGiro() : pararGiro();
}

// ===================== GIRO DOS VINIS =====================
// O ângulo de cada disco é guardado e só avança enquanto toca: ao pausar ele fica onde está,
// ao retomar continua dali, e arrastar o tempo gira para frente ou para trás.

const vinil = { ligados: [], angulos: new WeakMap(), rodando: false, ultimoQuadro: null };
const GRAUS_POR_SEGUNDO = 360 / 1.9;
const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

function girarVinis(graus) {
	vinil.ligados.forEach((v) => {
		const angulo = (vinil.angulos.get(v) || 0) + graus;
		vinil.angulos.set(v, angulo);
		v.style.setProperty("--giro", `${angulo}deg`);
	});
}

function quadroDoGiro(agora) {
	if (!vinil.rodando) return;
	if (vinil.ultimoQuadro !== null && !reduzMovimento.matches) girarVinis(((agora - vinil.ultimoQuadro) / 1000) * GRAUS_POR_SEGUNDO);
	vinil.ultimoQuadro = agora;
	requestAnimationFrame(quadroDoGiro);
}

function iniciarGiro() {
	if (vinil.rodando) return;
	vinil.rodando = true;
	vinil.ultimoQuadro = null;
	requestAnimationFrame(quadroDoGiro);
}

function pararGiro() {
	vinil.rodando = false;
}

function atualizarProgresso() {
	const total = player.audio.duration || 30;
	const atual = player.audio.currentTime || 0;
	ui.progresso.max = total;
	ui.progresso.value = atual;
	ui.progresso.style.setProperty("--progresso", `${(atual / total) * 100}%`);
	ui.tempo.textContent = `${formatarTempo(atual)} / ${formatarTempo(total)}`;
}

player.audio.addEventListener("playing", () => marcarEstado("tocando"));
player.audio.addEventListener("waiting", () => marcarEstado("carregando"));
player.audio.addEventListener("pause", () => !player.audio.ended && player.indice >= 0 && ui.raiz.classList.contains("is-aberto") && marcarEstado("pausado"));
player.audio.addEventListener("timeupdate", atualizarProgresso);
player.audio.addEventListener("loadedmetadata", atualizarProgresso);
player.audio.addEventListener("error", () => player.audio.src && marcarEstado("erro"));
player.audio.addEventListener("ended", () => {
	if (player.indice < player.lista.length - 1) carregarMusica(player.lista, player.indice + 1);
	else marcarEstado("pausado");
});

ui.progresso.addEventListener("input", () => {
	const novoTempo = Number(ui.progresso.value);
	girarVinis((novoTempo - player.audio.currentTime) * GRAUS_POR_SEGUNDO);
	player.audio.currentTime = novoTempo;
	atualizarProgresso();
});
ui.play.addEventListener("click", () => (player.indice < 0 ? carregarMusica(MUSICAS, 0) : alternarAtual()));
$(".player-proxima").addEventListener("click", () => carregarMusica(player.lista, (player.indice + 1) % player.lista.length));
$(".player-anterior").addEventListener("click", () => carregarMusica(player.lista, (player.indice - 1 + player.lista.length) % player.lista.length));
$(".player-fechar").addEventListener("click", fecharPlayer);

document.addEventListener("click", (e) => {
	const botao = e.target.closest("[data-tocar]");
	if (botao) alternarMusica(botao.dataset.tocar, botao.dataset.lista);
});

// ===================== LOJA =====================

function renderLoja() {
	const cards = PRODUTOS.map((p) => {
		const desconto = p.de ? Math.round((1 - p.preco / p.de) * 100) : 0;
		return `
		<li class="produto w-[min(78vw,320px)] shrink-0 snap-start md:w-[300px] lg:w-[340px]">
			<a href="${p.url}" target="_blank" rel="noopener" class="group block">
				<div class="overflow-hidden rounded-[24px] bg-nevoa">
					<img src="${p.img}" alt="${p.alt}" class="produto-img aspect-[4/5] w-full object-cover transition-[scale] duration-1000 ease-saida group-hover:scale-[1.04]" width="900" height="900" loading="lazy">
				</div>
				<h3 class="mt-5 font-display text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-ferrugem">${p.nome}</h3>
				${p.detalhe ? `<p class="mt-0.5 text-sm text-grafite">${p.detalhe}</p>` : ""}
				<p class="mt-2 flex flex-wrap items-baseline gap-x-2 text-[15px]">
					<span class="font-semibold text-tinta">${p.de ? '<span class="sr-only">Por </span>' : ""}${reais.format(p.preco)}</span>
					${p.de ? `<span class="sr-only">, antes</span><s class="text-grafite">${reais.format(p.de)}</s><span class="font-mono text-xs font-medium text-ferrugem">-${desconto}%</span>` : ""}
				</p>
				<span class="sr-only">(abre em nova aba)</span>
			</a>
		</li>`;
	}).join("");
	$(".loja-carrossel").insertAdjacentHTML("beforeend", cards + `<li class="w-px shrink-0 lg:w-[4vw]" aria-hidden="true"></li>`);
}

// Carrossel do celular/tablet: barra de progresso + botões de anterior/próximo.
function ligarCarrosselLoja() {
	const carrossel = $(".loja-carrossel");
	const barra = $(".loja-progresso");
	const anterior = $(".loja-anterior");
	const proximo = $(".loja-proximo");

	const atualizar = () => {
		const maximo = carrossel.scrollWidth - carrossel.clientWidth;
		const visivel = Math.min(1, carrossel.clientWidth / carrossel.scrollWidth);
		const posicao = maximo > 0 ? carrossel.scrollLeft / maximo : 0;
		barra.style.setProperty("--visivel", `${visivel * 100}%`);
		barra.style.setProperty("--deslocamento", `${((posicao * (1 - visivel)) / visivel) * 100}%`);
		anterior.disabled = carrossel.scrollLeft <= 2;
		proximo.disabled = carrossel.scrollLeft >= maximo - 2;
	};

	// Um card por clique (largura do card + espaço entre eles)
	const passo = () => {
		const card = $(".produto", carrossel);
		return card.getBoundingClientRect().width + parseFloat(getComputedStyle(carrossel).columnGap || 0);
	};
	const rolar = (direcao) => carrossel.scrollBy({ left: direcao * passo(), behavior: reduzMovimento.matches ? "auto" : "smooth" });

	anterior.addEventListener("click", () => rolar(-1));
	proximo.addEventListener("click", () => rolar(1));
	carrossel.addEventListener("scroll", () => requestAnimationFrame(atualizar), { passive: true });
	// Recalcula quando o tamanho muda (rotação da tela, CSS do Tailwind chegando, troca de layout)
	new ResizeObserver(atualizar).observe(carrossel);
	atualizar();
}

// ===================== GALERIA (rastro de fotos) =====================
// Como o cabeçalho da discografia de coveomusic.com: a cada 80px que o cursor anda dentro da seção
// nasce uma foto, e logo depois elas somem em fila, da mais antiga para a mais nova.
// A distância é medida dentro da seção, então rolar a página com o cursor parado também deixa rastro.
// Sem cursor (celular), um cursor virtual cruza a tela de um lado para o outro conforme a rolagem.
// Com o cursor sobre o título ou o parágrafo, nenhuma foto nasce.

const TOTAL_FOTOS = 74;
const RASTRO = { distancia: 80, vida: 250, intervaloSaida: 50, entrada: 450, saida: 750, maximo: 16, folgaTexto: 24 };
const semCursor = window.matchMedia("(hover: none), (pointer: coarse)");

const galeria = {
	secao: $("#galeria"),
	palco: $(".galeria-rastro"),
	textos: $$(".galeria-texto > :not(.galeria-dica)"), // a dica some no primeiro rastro, então não bloqueia
	fotos: [], // Image() já decodificadas, prontas para clonar
	proxima: 0,
	vivas: [], // fotos na tela, da mais antiga para a mais nova
	cursor: null, // posição na janela (clientX/clientY)
	ultima: null, // onde nasceu a última foto, em coordenadas da seção
	ultimaSaida: 0,
	perto: false,
	rodando: false,
	carregada: false,
	direcao: 1,
	rolagem: window.scrollY,
};

function embaralhar(lista) {
	for (let i = lista.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[lista[i], lista[j]] = [lista[j], lista[i]];
	}
	return lista;
}

// Ordem nova a cada visita. Cada foto só entra no rastro depois de decodificada, para nunca nascer em branco.
function carregarGaleria() {
	if (galeria.carregada) return;
	galeria.carregada = true;
	embaralhar(Array.from({ length: TOTAL_FOTOS }, (_, i) => i + 1)).forEach((n) => {
		const img = new Image();
		img.src = `img/galeria/${n}.jpg`;
		img.decode().then(() => galeria.fotos.push(img), () => {});
	});
}

function pontoNaGaleria() {
	if (!galeria.cursor) return null;
	const caixa = galeria.secao.getBoundingClientRect();
	const { x, y } = galeria.cursor;
	if (x < caixa.left || x > caixa.right || y < caixa.top || y > caixa.bottom) return null;
	return { x: x - caixa.left, y: y - caixa.top };
}

// Cursor em cima do título ou do texto: nenhuma foto nasce ali, para não esconder a leitura
function sobreTexto() {
	const { x, y } = galeria.cursor;
	return galeria.textos.some((el) => {
		const caixa = el.getBoundingClientRect();
		return x >= caixa.left - RASTRO.folgaTexto && x <= caixa.right + RASTRO.folgaTexto && y >= caixa.top - RASTRO.folgaTexto && y <= caixa.bottom + RASTRO.folgaTexto;
	});
}

function criarFoto(ponto, dx, dy) {
	const origem = galeria.fotos[galeria.proxima++ % galeria.fotos.length];
	const proporcao = origem.naturalWidth / origem.naturalHeight;
	const foto = origem.cloneNode();
	foto.className = "galeria-foto";
	foto.alt = "";
	foto.style.cssText = `left:${ponto.x}px;top:${ponto.y}px;--proporcao:${proporcao};--escala:${Math.sqrt(proporcao)}`;

	const giro = (Math.random() - 0.5) * 40;
	const final = `translate(-50%, -50%) rotate(${giro}deg) scale(1)`;
	// Nasce um pouco atrás, no caminho do cursor, e desliza até o ponto girando: o rastro ganha embalo
	const inicio = `translate(calc(-50% - ${dx * 0.35}px), calc(-50% - ${dy * 0.35}px)) rotate(${giro * 0.4}deg) scale(0)`;
	foto.style.transform = final;
	galeria.palco.append(foto);

	const quadros = reduzMovimento.matches ? [{ opacity: 0 }, { opacity: 1 }] : [{ transform: inicio }, { transform: final }];
	foto.animate(quadros, { duration: RASTRO.entrada, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });

	galeria.vivas.push({ foto, giro, sai: performance.now() + RASTRO.vida });
	galeria.secao.classList.add("is-ativa");
	if (galeria.vivas.length > RASTRO.maximo) removerFoto(galeria.vivas.shift());
}

// A saída parte de onde a foto está agora: quase sempre a entrada ainda não terminou.
function removerFoto({ foto, giro }) {
	const agora = getComputedStyle(foto);
	const quadros = reduzMovimento.matches
		? [{ opacity: agora.opacity }, { opacity: 0 }]
		: [{ transform: agora.transform }, { transform: `translate(-50%, -50%) rotate(${giro}deg) scale(0)` }];
	foto.getAnimations().forEach((a) => a.cancel());
	foto.animate(quadros, { duration: RASTRO.saida, easing: "cubic-bezier(0.64, 0, 0.78, 0)", fill: "forwards" }).onfinish = () => foto.remove();
}

function quadroGaleria(agora) {
	if (galeria.perto && galeria.fotos.length) {
		const ponto = pontoNaGaleria();
		if (!ponto) galeria.ultima = null;
		else if (!galeria.ultima) galeria.ultima = ponto;
		else {
			const dx = ponto.x - galeria.ultima.x;
			const dy = ponto.y - galeria.ultima.y;
			if (Math.hypot(dx, dy) >= RASTRO.distancia) {
				// Sobre o texto o rastro só avança: ao sair, a próxima foto nasce 80px depois da borda
				if (!sobreTexto()) criarFoto(ponto, dx, dy);
				galeria.ultima = ponto;
			}
		}
	}

	const antiga = galeria.vivas[0];
	if (antiga && agora >= antiga.sai && agora - galeria.ultimaSaida >= RASTRO.intervaloSaida) {
		removerFoto(galeria.vivas.shift());
		galeria.ultimaSaida = agora;
	}

	// Fora da tela e sem fotos para tirar, o laço para até a seção voltar
	if (galeria.perto || galeria.vivas.length) requestAnimationFrame(quadroGaleria);
	else galeria.rodando = false;
}

function ligarGaleria() {
	new IntersectionObserver(
		([entrada]) => {
			galeria.perto = entrada.isIntersecting;
			if (!galeria.perto) return;
			carregarGaleria();
			if (!galeria.rodando) {
				galeria.rodando = true;
				requestAnimationFrame(quadroGaleria);
			}
		},
		{ rootMargin: "100% 0px" } // começa a baixar as fotos uma tela antes da seção
	).observe(galeria.secao);

	const moverCursor = (e) => {
		if (e.pointerType !== "touch") galeria.cursor = { x: e.clientX, y: e.clientY };
	};
	document.addEventListener("pointermove", moverCursor, { passive: true });
	document.addEventListener("pointerover", moverCursor, { passive: true });
	document.addEventListener("mouseout", (e) => !e.relatedTarget && (galeria.cursor = null));

	// Celular: a rolagem empurra o cursor virtual na horizontal e ele volta ao bater nas bordas
	window.addEventListener(
		"scroll",
		() => {
			const delta = Math.abs(window.scrollY - galeria.rolagem);
			galeria.rolagem = window.scrollY;
			if (!semCursor.matches || !galeria.perto) return;
			const largura = window.innerWidth;
			const margem = largura * 0.15;
			let x = (galeria.cursor?.x ?? margem) + galeria.direcao * delta * 0.8;
			if (x > largura - margem || x < margem) {
				galeria.direcao *= -1;
				x = Math.min(Math.max(x, margem), largura - margem);
			}
			galeria.cursor = { x, y: window.innerHeight / 2 };
		},
		{ passive: true }
	);
}

// ===================== BANDA =====================

function prepararNomes() {
	$$(".membro-nome").forEach((titulo) => {
		const nome = $(".nome-visivel", titulo);
		nome.innerHTML = [...nome.textContent.trim()].map((c, i) => `<span class="mascara"><span class="letra" data-i="${i}">${c}</span></span>`).join("");

		// Cópia do nome só com contorno branco, na frente da foto: assim nomes curtos (ZANI) aparecem por cima da imagem.
		const contorno = document.createElement("div");
		contorno.className = `${titulo.className} membro-nome-contorno`;
		contorno.setAttribute("aria-hidden", "true");
		contorno.append(nome.cloneNode(true));
		titulo.after(contorno);
	});
}

// Atraso pelo índice da letra no nome: o nome de trás e o contorno da frente animam juntos, letra a letra.
const porLetra = (passo) => (_, letra) => Number(letra.dataset.i) * passo;

// ===================== HERO: CURVAS =====================
// Curvas de nível em limão, como o mapa topográfico do site da turnê Lagum em Todo Lugar.

function desenharCurvas(fase = 0) {
	const svg = $(".hero-curvas");
	const N = 9;
	if (!svg.childElementCount) {
		svg.innerHTML = Array.from({ length: N }, () => `<path fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.2" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0"></path>`).join("");
	}
	$$("path", svg).forEach((p, i) => {
		const base = 720 + i * 28;
		const amplitude = 60 + i * 7;
		const deslocamento = fase * Math.PI * 1.1 + i * 0.2;
		let d = "";
		for (let x = -40; x <= 1480; x += 40) {
			// Uma segunda onda, mais curta e diferente em cada linha, tira o paralelismo e lembra relevo
			const relevo = Math.sin((x / 1440) * Math.PI * (4.2 + i * 0.35) - deslocamento * 0.6 + i) * (10 + i * 2.5);
			const y = base + Math.sin((x / 1440) * Math.PI * 1.35 + deslocamento) * amplitude + relevo - (x / 1440) * 330;
			d += `${x === -40 ? "M" : "L"}${x} ${y.toFixed(1)} `;
		}
		p.setAttribute("d", d);
	});
}

// ===================== VÍDEO =====================

// O YouTube recusa este vídeo incorporado quando a página não tem um domínio de verdade:
// aberta como arquivo (file://, "Erro 153") ou por IP, como o 127.0.0.1 do Live Server
// ("Este vídeo não está disponível"). Nesses casos o play abre o vídeo no YouTube.
const podeIncorporarVideo = location.protocol.startsWith("http") && !/^(\d{1,3}\.){3}\d{1,3}$|^\[.*\]$/.test(location.hostname);
const botaoVideo = $(".video-play");

if (!podeIncorporarVideo) {
	botaoVideo.setAttribute("aria-label", "Assistir ao vídeo LAGUM - 2026 (na Varanda, BH) no YouTube (abre em nova aba)");
}

botaoVideo.addEventListener("click", () => {
	const id = botaoVideo.dataset.youtube;
	player.audio.pause();

	if (!podeIncorporarVideo) {
		window.open(`https://www.youtube.com/watch?v=${id}`, "_blank", "noopener");
		return;
	}

	const iframe = document.createElement("iframe");
	iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;
	iframe.title = "LAGUM - 2026 (na Varanda, BH)";
	iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
	iframe.referrerPolicy = "strict-origin-when-cross-origin";
	iframe.allowFullscreen = true;
	iframe.className = "absolute inset-0 h-full w-full";
	botaoVideo.replaceWith(iframe);
});

// ===================== MENU MOBILE =====================

const menu = $("#menu-mobile");
const menuAbrir = $("#menu-abrir");
menu.inert = true;

function definirMenu(aberto, devolverFoco = true) {
	menu.classList.toggle("is-aberto", aberto);
	menu.inert = !aberto;
	menuAbrir.setAttribute("aria-expanded", String(aberto));
	document.documentElement.style.overflow = aberto ? "hidden" : "";
	if (aberto) {
		lenis?.stop();
		$("#menu-fechar").focus();
		if (animacoesAtivas) gsap.from(".menu-link", { yPercent: 60, opacity: 0, stagger: 0.05, duration: 0.8, ease: "expo.out", delay: 0.15 });
	} else {
		lenis?.start();
		if (devolverFoco) menuAbrir.focus();
	}
}

menuAbrir.addEventListener("click", () => definirMenu(true));
$("#menu-fechar").addEventListener("click", () => definirMenu(false));
document.addEventListener("keydown", (e) => e.key === "Escape" && menu.classList.contains("is-aberto") && definirMenu(false));
$$(".menu-link").forEach((link) =>
	link.addEventListener("click", (e) => {
		e.preventDefault();
		definirMenu(false, false);
		const alvo = $(link.getAttribute("href"));
		lenis ? lenis.scrollTo(alvo) : alvo.scrollIntoView();
	})
);

// ===================== CONTATO =====================

$$("[data-copiar]").forEach((botao) =>
	botao.addEventListener("click", async () => {
		const texto = botao.dataset.copiar;
		let ok = false;
		try {
			await navigator.clipboard.writeText(texto);
			ok = true;
		} catch {
			const campo = Object.assign(document.createElement("textarea"), { value: texto, readOnly: true });
			campo.style.cssText = "position:fixed;opacity:0";
			document.body.append(campo);
			campo.select();
			ok = document.execCommand("copy");
			campo.remove();
		}
		const rotulo = $("span", botao);
		const icone = $("i", botao);
		rotulo.textContent = ok ? "E-mail copiado" : "Não deu para copiar";
		icone.className = `bx ${ok ? "bx-check" : "bx-x"} text-lg`;
		$("#copiar-status").textContent = ok ? "E-mail copiado para a área de transferência." : "Não foi possível copiar o e-mail.";
		clearTimeout(botao._timer);
		botao._timer = setTimeout(() => {
			rotulo.textContent = "Copiar e-mail";
			icone.className = "bx bx-copy text-lg";
		}, 2200);
	})
);

// ===================== ANIMAÇÕES =====================

let introFeita = false;

function introHero() {
	gsap.set("[data-entrada]", { visibility: "visible" });
	if (introFeita || document.documentElement.classList.contains("sem-anim")) return;
	introFeita = true;

	gsap.timeline({ defaults: { ease: "expo.out", duration: 1.3 } })
		.from(".hero .logo-lag", { yPercent: 115, rotation: -6, transformOrigin: "0% 100%" }, 0.1)
		.from(".hero .logo-um", { yPercent: 115, rotation: 6, transformOrigin: "100% 100%" }, 0.22)
		.fromTo(".hero-turne", { clipPath: "inset(-10% 104% -10% -4%)" }, { clipPath: "inset(-10% -4% -10% -4%)", duration: 1.5, ease: "power3.inOut" }, 0.45)
		.from([".hero-sub", ".hero-ctas"], { y: 26, opacity: 0, stagger: 0.1, duration: 1 }, 0.62)
		.fromTo(".hero .capa", { clipPath: "inset(16% 16% 16% 16% round 4px)", scale: 1.08 }, { clipPath: "inset(0% 0% 0% 0% round 4px)", scale: 1, duration: 1.6 }, 0.25)
		.fromTo(".hero .vinil-saida", { x: 0, xPercent: 0 }, { xPercent: 34, duration: 1.7, ease: "power4.out" }, 0.95)
		.from(".hero .vinil-saida .vinil-disco", { rotation: -320, duration: 2.2, ease: "power3.out" }, 0.95)
		.from(".hero-curvas path", { strokeDashoffset: 1, stagger: 0.05, duration: 2.4, ease: "power2.inOut" }, 0);
}

function animarHero() {
	const rolagem = { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 };
	gsap.to(".hero .vinil-scroll", { xPercent: 22, rotation: 150, ease: "none", scrollTrigger: rolagem });
	gsap.to(".hero .capa", { yPercent: -8, rotation: -3, ease: "none", scrollTrigger: rolagem });
	gsap.to(".hero .logo-lag", { xPercent: -5, ease: "none", scrollTrigger: rolagem });
	gsap.to(".hero .logo-um", { xPercent: 7, ease: "none", scrollTrigger: rolagem });
	gsap.to(".hero-texto", { yPercent: -10, ease: "none", scrollTrigger: rolagem });
	ScrollTrigger.create({ ...rolagem, onUpdate: (self) => desenharCurvas(self.progress) });
}

function animarTitulos() {
	if (!window.SplitText) return;
	$$("[data-split]").forEach((el) => {
		SplitText.create(el, {
			type: "lines",
			mask: "lines",
			autoSplit: true,
			onSplit: (self) =>
				gsap.from(self.lines, { yPercent: 105, duration: 1.1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 86%", once: true } }),
		});
	});
}

function animarLancamento() {
	gsap.fromTo(".video-moldura", { scale: 0.84, borderRadius: 64 }, { scale: 1, borderRadius: 24, ease: "none", scrollTrigger: { trigger: ".video-moldura", start: "top bottom", end: "top 20%", scrub: 0.6 } });
	gsap.fromTo(".video-ano", { xPercent: 4 }, { xPercent: -10, ease: "none", scrollTrigger: { trigger: "#lancamento", start: "top bottom", end: "bottom top", scrub: 0.6 } });
}

function animarFaixa() {
	const loop = gsap.to(".faixa-trilho", { xPercent: -50, ease: "none", duration: 40, repeat: -1 });
	ScrollTrigger.create({
		trigger: ".faixa-cidades",
		start: "top bottom",
		end: "bottom top",
		onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
		onUpdate: (self) => {
			const direcao = self.direction;
			const impulso = Math.min(Math.abs(self.getVelocity()) / 260, 6);
			gsap.to(loop, {
				timeScale: direcao * (1 + impulso),
				duration: 0.25,
				overwrite: true,
				onComplete: () => gsap.to(loop, { timeScale: direcao, duration: 1.2 }),
			});
		},
	});
}

function animarAgenda() {
	const st = { trigger: ".agenda-foto", start: "top bottom", end: "center 55%", scrub: 0.6 };
	gsap.fromTo(".agenda-foto", { clipPath: "inset(10% 14% 10% 14% round 24px)" }, { clipPath: "inset(0% 0% 0% 0% round 24px)", ease: "none", scrollTrigger: st });
	gsap.fromTo(".agenda-foto img", { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: st });
	// fromTo com o estado final explícito: com from(), um refresh do ScrollTrigger podia gravar
	// o estado escondido como "final" e os chips terminavam invisíveis.
	gsap.fromTo(
		"#agenda-filtros .chip",
		{ y: 20, opacity: 0 },
		{ y: 0, opacity: 1, stagger: 0.04, duration: 0.8, ease: "expo.out", scrollTrigger: { trigger: "#agenda-filtros", start: "top 92%", once: true } }
	);
	revelarShows();
}

function animarBandaPinada() {
	const banda = $("#banda");
	const membros = $$(".membro", banda);
	const n = membros.length;
	const botoes = $$("[data-ir-membro]", banda);
	banda.classList.add("is-pinned");

	const letras = (m) => $$(".letra", m);
	const foto = (m) => $(".membro-foto-interna", m);
	const info = (m) => $(".membro-info", m);

	// O contorno da frente só aparece dentro do arco da foto, onde o nome de trás fica escondido.
	const recortarContorno = (m) => {
		const contorno = $(".membro-nome-contorno", m);
		const caixa = contorno.getBoundingClientRect();
		const arco = $(".membro-foto", m).getBoundingClientRect();
		const raio = arco.width / 2;
		contorno.style.clipPath = `inset(${arco.top - caixa.top}px ${caixa.right - arco.right}px ${caixa.bottom - arco.bottom}px ${arco.left - caixa.left}px round ${raio}px ${raio}px 24px 24px)`;
	};

	// Todo nome ocupa a mesma largura do palco (ZANI fica maior que CHICÃO), com teto de altura.
	const ajustarNomes = () => {
		const larguraAlvo = $(".banda-palco", banda).clientWidth * 0.84;
		membros.forEach((m) => {
			const [titulo, contorno] = $$(".membro-nome", m);
			titulo.style.fontSize = "200px";
			const largura = $(".nome-visivel", titulo).getBoundingClientRect().width;
			titulo.style.fontSize = contorno.style.fontSize = `${Math.min((200 * larguraAlvo) / largura, window.innerHeight * 0.5)}px`;
			recortarContorno(m);
		});
	};
	ajustarNomes();
	ScrollTrigger.addEventListener("refreshInit", ajustarNomes);

	membros.slice(1).forEach((m) => {
		gsap.set(letras(m), { yPercent: 185 });
		gsap.set(foto(m), { clipPath: "inset(100% 0% 0% 0%)" });
		gsap.set(info(m), { opacity: 0, y: 24 });
	});

	// Cada integrante ocupa 1 unidade da timeline: a troca dura 0.6 e o resto é pausa para leitura.
	const PAUSA_INICIAL = 0.25;
	const TROCA = 0.6;
	const inicioTroca = (i) => PAUSA_INICIAL + (i - 1);

	let ativo = 0;
	const marcar = (tempo) => {
		const i = membros.reduce((acc, _, j) => (j > 0 && tempo >= inicioTroca(j) + TROCA / 2 ? j : acc), 0);
		if (i === ativo) return;
		ativo = i;
		botoes.forEach((b, j) => b.setAttribute("aria-current", String(j === i)));
	};

	const tl = gsap.timeline({
		defaults: { ease: "none" },
		scrollTrigger: {
			trigger: banda,
			start: "top top",
			end: () => `+=${(n - 1) * window.innerHeight * 1.1}`,
			pin: true,
			scrub: 0.6,
			invalidateOnRefresh: true,
			onUpdate: (self) => marcar(self.progress * tl.duration()),
		},
	});

	membros.forEach((m, i) => {
		if (i === 0) return;
		const anterior = membros[i - 1];
		const t = inicioTroca(i);
		tl.to(letras(anterior), { yPercent: -185, stagger: porLetra(0.015), duration: 0.25 }, t)
			.to(info(anterior), { opacity: 0, y: -24, duration: 0.15 }, t)
			.to($("img", anterior), { scale: 0.92, duration: 0.45 }, t)
			.to(foto(m), { clipPath: "inset(0% 0% 0% 0%)", duration: 0.45 }, t + 0.05)
			.fromTo($("img", m), { scale: 1.3 }, { scale: 1, duration: 0.5 }, t + 0.05)
			.to(letras(m), { yPercent: 0, stagger: porLetra(0.015), duration: 0.25 }, t + 0.25)
			.to(info(m), { opacity: 1, y: 0, duration: 0.15 }, t + 0.45);
	});
	tl.set({}, {}, inicioTroca(n - 1) + 1);

	botoes.forEach((b, i) =>
		b.addEventListener("click", () => {
			const st = tl.scrollTrigger;
			const tempo = i === 0 ? 0 : inicioTroca(i) + TROCA + 0.05;
			const destino = st.start + (st.end - st.start) * (tempo / tl.duration());
			lenis ? lenis.scrollTo(destino) : window.scrollTo({ top: destino });
		})
	);

	return () => {
		ScrollTrigger.removeEventListener("refreshInit", ajustarNomes);
		$$(".membro-nome", banda).forEach((t) => (t.style.fontSize = t.style.clipPath = ""));
		banda.classList.remove("is-pinned");
		botoes.forEach((b, j) => b.setAttribute("aria-current", String(j === 0)));
	};
}

function animarBandaEmpilhada() {
	$$(".membro").forEach((m) => {
		const tl = gsap.timeline({ scrollTrigger: { trigger: m, start: "top 80%", once: true }, defaults: { ease: "expo.out" } });
		tl.from($$(".letra", m), { yPercent: 185, stagger: porLetra(0.04), duration: 1 })
			.fromTo($(".membro-foto-interna", m), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2 }, 0.1)
			.from($("img", m), { scale: 1.3, duration: 1.4 }, 0.1)
			.from($(".membro-info", m), { y: 20, opacity: 0, duration: 0.8 }, 0.5);
	});
}

// Anima o botão de dentro do card: o deslocamento em escada (md:translate-y-16) fica no <li> e não é apagado pelo GSAP
function animarMusicas() {
	const cards = $$(".musica-botao");
	gsap.set(cards, { opacity: 0, y: 80, rotation: (i) => (i % 2 ? 2.5 : -2.5) });
	ScrollTrigger.batch(cards, {
		start: "top 92%",
		once: true,
		onEnter: (lote) => gsap.to(lote, { opacity: 1, y: 0, rotation: 0, stagger: 0.09, duration: 1.2, ease: "expo.out" }),
	});
}

function animarLojaPan() {
	const secao = $("#loja");
	const trilho = $(".loja-trilho");
	secao.classList.add("is-panning");
	const distancia = () => Math.max(0, trilho.scrollWidth - window.innerWidth);

	const pan = gsap.to(trilho, {
		x: () => -distancia(),
		ease: "none",
		scrollTrigger: { trigger: secao, start: "top top", end: () => `+=${distancia()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true },
	});

	// Teclado: ao focar um produto fora da tela, rola a página até o ponto do pan em que ele aparece centralizado
	const focarItem = (e) => {
		const item = e.target.closest(".produto, .loja-intro");
		const st = pan.scrollTrigger;
		if (!item || !st || !distancia()) return;
		const caixa = item.getBoundingClientRect();
		const esquerda = caixa.left - gsap.getProperty(trilho, "x");
		const alvo = gsap.utils.clamp(0, distancia(), esquerda - (window.innerWidth - caixa.width) / 2);
		const destino = st.start + (st.end - st.start) * (alvo / distancia());
		lenis ? lenis.scrollTo(destino, { immediate: true }) : window.scrollTo(0, destino);
	};
	trilho.addEventListener("focusin", focarItem);

	$$(".produto", trilho).forEach((p, i) => {
		gsap.fromTo($("img", p), { scale: 1.2 }, { scale: 1, ease: "none", scrollTrigger: { trigger: p, containerAnimation: pan, start: "left right", end: "center center", scrub: true } });
		gsap.fromTo(p, { y: i % 2 ? 60 : -20 }, { y: i % 2 ? -20 : 40, ease: "none", scrollTrigger: { trigger: p, containerAnimation: pan, start: "left right", end: "right left", scrub: true } });
	});

	return () => {
		trilho.removeEventListener("focusin", focarItem);
		secao.classList.remove("is-panning");
		gsap.set(trilho, { clearProps: "transform" });
	};
}

function animarLojaMobile() {
	gsap.fromTo(
		".produto",
		{ x: 60, opacity: 0 },
		{ x: 0, opacity: 1, stagger: 0.08, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: ".loja-carrossel", start: "top 85%", once: true } }
	);
}

function animarContatoERodape() {
	gsap.from(".contato-celula", { y: 60, opacity: 0, stagger: 0.1, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: ".contato-grade", start: "top 82%", once: true } });
	gsap.from(".rodape .logo-lag", { yPercent: 110, ease: "none", scrollTrigger: { trigger: ".rodape-logo", start: "top bottom", end: "bottom bottom", scrub: 0.8 } });
	gsap.from(".rodape .logo-um", { yPercent: 110, ease: "none", scrollTrigger: { trigger: ".rodape-logo", start: "top 88%", end: "bottom bottom", scrub: 0.8 } });
}

// Teclado: se o foco cair num item que ainda espera a animação de entrada, ele aparece na hora.
document.addEventListener("focusin", (e) => {
	if (!animacoesAtivas) return;
	const item = e.target.closest(".show, .musica-botao, .contato-celula, .produto, .chip");
	if (item && Number(getComputedStyle(item).opacity) < 1) gsap.to(item, { opacity: 1, x: 0, y: 0, rotation: 0, duration: 0.4, ease: "expo.out", overwrite: true });
});

// Topo some ao descer e volta ao subir; o link da seção visível fica marcado.
function observarNavegacao() {
	const topo = $("#topo");
	ScrollTrigger.create({
		start: 0,
		end: "max",
		onUpdate: (self) => {
			const y = self.scroll();
			topo.classList.toggle("is-topo", y < 24);
			topo.classList.toggle("is-oculto", self.direction === 1 && y > 640 && !menu.classList.contains("is-aberto"));
		},
	});
	$$('#topo .nav-link[href^="#"]').forEach((link) => {
		const secao = $(link.getAttribute("href"));
		ScrollTrigger.create({ trigger: secao, start: "top 50%", end: "bottom 50%", onToggle: (self) => link.setAttribute("aria-current", String(self.isActive)) });
	});
}

function iniciarAnimacoes() {
	clearTimeout(window.__semAnimacao);
	if (!window.gsap || !window.ScrollTrigger) {
		document.documentElement.classList.add("sem-anim");
		$("#topo").classList.remove("is-topo");
		return;
	}
	gsap.registerPlugin(ScrollTrigger);
	if (window.SplitText) gsap.registerPlugin(SplitText);

	// "reduz" garante que alguma condição sempre casa: sem ela, celular com movimento reduzido nunca entrava aqui
	// e o hero ficava escondido para sempre.
	gsap.matchMedia().add(
		{ movimento: "(prefers-reduced-motion: no-preference)", reduz: "(prefers-reduced-motion: reduce)", desktop: "(min-width: 1024px)" },
		(ctx) => {
			const { movimento, desktop } = ctx.conditions;

			if (!movimento) {
				animacoesAtivas = false;
				document.documentElement.classList.add("sem-anim");
				revelarShows();
				observarNavegacao();
				return;
			}

			animacoesAtivas = true;
			if (window.Lenis) {
				lenis = new Lenis({ anchors: true, lerp: 0.11 });
				lenis.on("scroll", ScrollTrigger.update);
			}
			const raf = (tempo) => lenis?.raf(tempo * 1000);
			gsap.ticker.add(raf);
			gsap.ticker.lagSmoothing(0);

			// Na ordem das seções na página: o ScrollTrigger calcula as posições na ordem de criação,
			// e o que vem depois da banda e da loja (seções fixadas) precisa contar o espaço delas
			introHero();
			animarHero();
			animarTitulos();
			animarAgenda();
			animarFaixa();
			animarMusicas();
			const desfazerBanda = desktop ? animarBandaPinada() : (animarBandaEmpilhada(), null);
			const desfazerLoja = desktop ? animarLojaPan() : (animarLojaMobile(), null);
			animarLancamento();
			animarContatoERodape();
			observarNavegacao();

			return () => {
				gsap.ticker.remove(raf);
				lenis?.destroy();
				lenis = null;
				animacoesAtivas = false;
				desfazerBanda?.();
				desfazerLoja?.();
			};
		}
	);

	requestAnimationFrame(() => ScrollTrigger.refresh());
}

// ===================== INÍCIO =====================

renderFaixa();
renderAgenda();
renderHeroProxima();
renderDisco();
renderMusicas();
renderLoja();
ligarCarrosselLoja();
ligarGaleria();
prepararNomes();
desenharCurvas(0);

// As animações começam sem esperar todas as imagens (no 3G o "load" passava de 40s):
// basta o CSS do Tailwind estar aplicado e as fontes prontas (com teto de 1,5s).
// Quando imagens e fontes terminam de chegar, as posições dos ScrollTriggers são recalculadas.
const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));
const fontesProntas = document.fonts ? document.fonts.ready : Promise.resolve();

function tailwindPronto(limite = 2000) {
	const inicio = performance.now();
	return new Promise((ok) => {
		const checar = () => (getComputedStyle($("#topo nav")).display === "flex" || performance.now() - inicio > limite ? ok() : requestAnimationFrame(checar));
		checar();
	});
}

tailwindPronto()
	.then(() => Promise.race([fontesProntas, esperar(1500)]))
	.then(() => requestAnimationFrame(iniciarAnimacoes));

const recalcular = () => window.ScrollTrigger && animacoesAtivas && ScrollTrigger.refresh();
fontesProntas.then(recalcular);
window.addEventListener("load", recalcular);
