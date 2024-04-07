using Microsoft.AspNetCore.Identity;

namespace DiabetesGuard.API.Repositories.Interface
{
    public interface ITokenRepositry
    {
        public string CreateJwtToken(IdentityUser user, List<string> roles);



    }
}
