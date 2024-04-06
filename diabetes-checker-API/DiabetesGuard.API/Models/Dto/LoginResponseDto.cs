﻿using System.IdentityModel.Tokens.Jwt;

namespace DiabetesGuard.API.Models.Dto
{
    public class LoginResponseDto
    {

        public string Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public List<string> Roles { get; set; }

    }
}
