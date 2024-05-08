<script>

    async function criarArquivoZipCriptografado() {
       
        const zip = new JSZip();    // Criar uma instância do JSZip
        const jsonData = { "config": "conteudo_do_arquivo_json" };      // Adicionar o arquivo .json ao zip (por exemplo, config.json)
        zip.file("config.json", JSON.stringify(jsonData));

        // Gerar uma chave de criptografia
        const key = await window.crypto.subtle.generateKey(
{
                name: 'AES-GCM',
                length: 256
            },
            true,
            ['encrypt', 'decrypt']
        );

        // Obter o conteúdo do arquivo .zip
        const zipContent = await zip.generateAsync({ type: 'blob' });

        // Criptografar o conteúdo do arquivo .zip
        const encryptedData = await window.crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv: window.crypto.getRandomValues(new Uint8Array(12))
            },
            key,
            zipContent
        );

        // Salvar o arquivo .zip criptografado
        const encryptedZipFile = new Blob([encryptedData], { type: 'application/octet-stream' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(encryptedZipFile);
        downloadLink.download = 'arquivo.zip';
        downloadLink.click();
    }
</script>
