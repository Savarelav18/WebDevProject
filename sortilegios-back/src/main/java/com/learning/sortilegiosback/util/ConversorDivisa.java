package com.learning.sortilegiosback.util;

import com.learning.sortilegiosback.exception.BadRequestException;

public class ConversorDivisa {
    public static Double convertirDivisa(Double precio, String divisa){
        switch (divisa) {
            case "knuts" -> {
                return precio * 0.0149 * 4016;
            }
            case "galeones" -> {
                return precio * 7.35 * 4016;
            }
            case "sickles" -> {
                return precio * 0.432 * 4016;
            }
        }
        throw new BadRequestException("Divisa no existente");
    }
}
