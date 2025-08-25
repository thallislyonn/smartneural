# 💹🤖 Neural Inteligente — Assistente Financeiro (Flask + Gemini)  

**Prévia:**  🎨


https://github.com/user-attachments/assets/6d9d8de2-dc8a-4766-8b2f-8ebf52d48489


> Um chatbot **responsivo financeiro** com **UI estilo Matrix**, feito em **Python + Flask** e integrado ao **Gemini 2.5 Flash**.  
> Pensado para orientar jovens em finanças com linguagem simples, encorajadora e prática.  
> **Totalmente personalizável** via *system prompt* — mude o comportamento e a “personalidade” do bot como quiser.  

---

## 🚀 Funcionalidades
- Orientação financeira em linguagem simples  
- Histórico de conversa com contexto (mantém a sessão do usuário)  
- Interface estilo **Matrix** (dark + verde neon)  
- Fácil de personalizar via `system_prompt` (mude a persona ou área de atuação)  

> Quer sugerir algo? Abra uma **Issue** ou mande um **PR** 🤝

---

## ⚙️ Stack

- **Backend:** Python 3.13.4, Flask
- **IA:** `google-generativeai` (Gemini 2.5 Flash) 
- **Configuração:** `python-dotenv` (`.env`)
- **Frontend:** HTML/CSS/JS (tema dark + neon), animação de “digitando…”, parsing de markdown via `marked` no browser

---

## ⚙️ Como Rodar Localmente

### 1. Clone o repositório
```Terminal
git clone https://github.com/thallislyonn/smartneural
cd smartneural
```

### 2. Crie e Ative a venv
```Terminal
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux/Mac
source .venv/bin/activate
```

### 3. Instale as Dependências

Antes de rodar, crie um arquivo `requirements.txt` na raiz do projeto com o seguinte conteúdo:

```txt
Flask
python-dotenv
google-generativeai
```

### 4. Configure o .env

Crie um arquivo .env na raiz com suas chaves:

```env
GOOGLE_API_KEY=sua_chave_google
SECRET_API_KEY=uma_chave_segura
```
⚠️ Não compartilhe este arquivo! Ele já está listado no .gitignore.

### 5. Execute o Projeto
```Terminal
python run.py
```
>Abra no navegador: http://127.0.0.1:5000/

### 🧩 Personalização (System Prompt)
A “personalidade” do bot fica no `system_prompt` (funcionalidades).  
Para mudar o comportamento (ex.: virar mentor de estudos, jurídico, carreira), edite o bloco abaixo no backend:

```python
# __init__.py (file)
system_prompt = """
# Persona: Seu Guia Financeiro Pessoal
- Tom: claro, encorajador, simples
- Foco: finanças pessoais para jovens
- Regras: explique o porquê das dicas; termine com uma ação prática
"""
```
### 📜 Licença

Este projeto é open-source sob a licença MIT.



