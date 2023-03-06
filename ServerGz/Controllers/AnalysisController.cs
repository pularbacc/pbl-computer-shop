using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerGz.Data;
using ServerGz.Models;

namespace ServerGz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalysisController : ControllerBase
    {
        private readonly GzDbContext _context;
        public AnalysisController(GzDbContext context)
        {
            _context = context;
        }

        public IActionResult computerAna()
        {
            return Ok(_context.Computer.Select(k => new
            {
                name = k.name,
                orderNum = k.orderNum
            }).OrderByDescending(K => K.orderNum));
        }
    }
}