﻿namespace DiabetesGuard.API.Models.Domain
{
    public class RefreshToken
    {
        public required string Token { get; set; }

        public DateTime CreatedDate { get; set; }= DateTime.Now;

        public DateTime Expires { get; set; }



    }
}
