package com.woochacha.backend.common;

import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.stereotype.Component;

@Component
public class DataMasking {

    private final TextEncryptor textEncryptor;

    public DataMasking(TextEncryptor textEncryptor) {
        this.textEncryptor = textEncryptor;
    }
    public String encoding(String plainText) {
        return textEncryptor.encrypt(plainText);
    }

    public String decoding(String encryptText) {
        return textEncryptor.decrypt(encryptText);
    }
}