using Microsoft.EntityFrameworkCore;
using ServerGz.Models;

namespace ServerGz.Data
{
    public class GzDbContext : DbContext
    {
        public GzDbContext (DbContextOptions<GzDbContext> options)
            : base(options)
        {
        }
        public DbSet<Computer> Computer {get;set;}

        public DbSet<Compon> Compon {get;set;}

        public DbSet<Bill> Bill {get;set;}
        public DbSet<BillDetail> BillDetail {get;set;}

        public DbSet<Account> Account {get;set;}
    }
}