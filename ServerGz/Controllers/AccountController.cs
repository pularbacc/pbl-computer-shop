using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerGz.Data;
using ServerGz.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;

namespace ServerGz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly GzDbContext _context;

        public AccountController(GzDbContext context)
        {
            _context = context;
        }

        private string hashPass(string password)
        {
            byte[] salt = { 0, 16, 104, 213, 23, 12, 32, 6, 4, 12, 5, 3, 23 };
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8));

            return hashed;
        }

        private bool checkAccount(Account account)
        {
            Console.WriteLine("check account ...");
            
            var user = _context.Account.Find(account.name);
            if (user != null)
            {
                if (hashPass(account.password) == user.password)
                    return true;
            }

            return false;
        }

        [HttpPost, Route("login")]
        public IActionResult Login(Account account)
        {
            if (account == null)
            {
                return BadRequest("Bad Request");
            }

            if (checkAccount(account))
            {
                Console.WriteLine("login success");
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.Name, account.name));
                claims.Add(new Claim(ClaimTypes.Role, _context.Account.Find(account.name).role));

                var tokenOptions = new JwtSecurityToken
                (
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:5000",

                    claims: claims,
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost, Route("register")]
        public IActionResult PostAccount(Account account)
        {
            if (_context.Account.Any(e => e.name == account.name))
            {
                return Unauthorized();
            }
            account.password = hashPass(account.password);
            account.role = "user";
            _context.Account.Add(account);
            _context.SaveChangesAsync();

            return Ok();
        }

    }
}
