using Microsoft.EntityFrameworkCore.Migrations;

namespace Netpincer_App_Beadando.Migrations
{
    public partial class order_food : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Food_Orders_OrderId",
                table: "Food");

            migrationBuilder.DropIndex(
                name: "IX_Food_OrderId",
                table: "Food");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Food");

            migrationBuilder.CreateTable(
                name: "OrderFood",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    FoodId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderFood", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderFood_Food_FoodId",
                        column: x => x.FoodId,
                        principalTable: "Food",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderFood_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderFood_FoodId",
                table: "OrderFood",
                column: "FoodId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderFood_OrderId",
                table: "OrderFood",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderFood");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "Food",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Food_OrderId",
                table: "Food",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Food_Orders_OrderId",
                table: "Food",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
