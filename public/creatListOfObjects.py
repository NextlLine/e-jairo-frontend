import os
import json
import re
import unicodedata

DOCS_PATH = "./docs"
OUTPUT_FILE = "./result/created_docs.json"

docs_list = []

EXTENSOES_VALIDAS = ["pdf", "docx", "xlsx", "jpg", "png"]

def remover_acentos(texto):
    return ''.join(
        c for c in unicodedata.normalize('NFD', texto)
        if unicodedata.category(c) != 'Mn'
    )

def limpar_nome(nome_arquivo):
    nome = os.path.splitext(nome_arquivo)[0]
    nome = nome.replace("_", " ").replace("-", " ")
    nome = remover_acentos(nome)
    nome = re.sub(r"[^\w\s]", "", nome)
    nome = re.sub(r"\s+", " ", nome).strip()
    return nome.title()

def corrigir_extensao_duplicada(filename):
    partes = filename.lower().split(".")
    
    if len(partes) > 2:
        ultima_ext = partes[-1]

        if ultima_ext in EXTENSOES_VALIDAS:
            nome_base = ".".join(partes[:-1])

            while nome_base.endswith("." + ultima_ext):
                nome_base = nome_base[:-(len(ultima_ext) + 1)]

            novo_nome = f"{nome_base}.{ultima_ext}"
            return novo_nome

    return filename

def create_docs_list():
    if not os.path.exists(DOCS_PATH):
        print(f"Pasta {DOCS_PATH} não existe.")
        return

    for file in os.listdir(DOCS_PATH):
        caminho_antigo = os.path.join(DOCS_PATH, file)

        if not os.path.isfile(caminho_antigo):
            continue

        nome_corrigido = corrigir_extensao_duplicada(file)

        if nome_corrigido != file:
            caminho_novo = os.path.join(DOCS_PATH, nome_corrigido)
            os.rename(caminho_antigo, caminho_novo)
            print(f"Renomeado: {file} → {nome_corrigido}")
            file = nome_corrigido  

        docs_list.append({
            "nome": limpar_nome(file),
            "arquivo": file,
        })

def create_json_file():
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(docs_list, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    create_docs_list()
    create_json_file()