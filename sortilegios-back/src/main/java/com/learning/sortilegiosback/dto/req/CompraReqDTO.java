package com.learning.sortilegiosback.dto.req;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CompraReqDTO {
    String username;
    String direccion;
}
